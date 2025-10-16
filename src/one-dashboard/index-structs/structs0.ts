/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
export interface OneDashboardPageWidgetAreaColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetAreaColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetAreaColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetAreaColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetAreaColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetAreaColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetAreaColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetAreaColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetAreaColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetAreaColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetAreaColorsToTerraform(struct?: OneDashboardPageWidgetAreaColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetAreaColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetAreaColorsToHclTerraform(struct?: OneDashboardPageWidgetAreaColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetAreaColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetAreaColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetAreaColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetAreaColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaColorsOutputReference {
    return new OneDashboardPageWidgetAreaColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetAreaDataFormatToTerraform(struct?: OneDashboardPageWidgetAreaDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetAreaDataFormatToHclTerraform(struct?: OneDashboardPageWidgetAreaDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetAreaDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetAreaDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetAreaDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaDataFormatOutputReference {
    return new OneDashboardPageWidgetAreaDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetAreaInitialSortingToTerraform(struct?: OneDashboardPageWidgetAreaInitialSortingOutputReference | OneDashboardPageWidgetAreaInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetAreaInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetAreaInitialSortingOutputReference | OneDashboardPageWidgetAreaInitialSorting): any {
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

export class OneDashboardPageWidgetAreaInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetAreaInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetAreaNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetAreaNrqlQueryToTerraform(struct?: OneDashboardPageWidgetAreaNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetAreaNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetAreaNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetAreaNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetAreaNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetAreaNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaNrqlQueryOutputReference {
    return new OneDashboardPageWidgetAreaNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetAreaNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetAreaNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetAreaNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetAreaNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetAreaNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetAreaNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetAreaNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetAreaNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetAreaNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetAreaNullValuesToTerraform(struct?: OneDashboardPageWidgetAreaNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetAreaNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetAreaNullValuesToHclTerraform(struct?: OneDashboardPageWidgetAreaNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetAreaNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetAreaNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetAreaNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetAreaNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaNullValuesOutputReference {
    return new OneDashboardPageWidgetAreaNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaTooltip {
  /**
  * Tooltip display mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#mode OneDashboard#mode}
  */
  readonly mode: string;
}

export function oneDashboardPageWidgetAreaTooltipToTerraform(struct?: OneDashboardPageWidgetAreaTooltipOutputReference | OneDashboardPageWidgetAreaTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function oneDashboardPageWidgetAreaTooltipToHclTerraform(struct?: OneDashboardPageWidgetAreaTooltipOutputReference | OneDashboardPageWidgetAreaTooltip): any {
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

export class OneDashboardPageWidgetAreaTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetAreaTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetAreaTooltip | undefined) {
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
export interface OneDashboardPageWidgetAreaUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetAreaUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetAreaUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetAreaUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetAreaUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetAreaUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetAreaUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetAreaUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetAreaUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetAreaUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetAreaUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetAreaUnitsToTerraform(struct?: OneDashboardPageWidgetAreaUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetAreaUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetAreaUnitsToHclTerraform(struct?: OneDashboardPageWidgetAreaUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetAreaUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetAreaUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetAreaUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetAreaUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetAreaUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetAreaUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaUnitsOutputReference {
    return new OneDashboardPageWidgetAreaUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetArea {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetAreaColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetAreaDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetAreaInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetAreaNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetAreaNullValues[] | cdktf.IResolvable;
  /**
  * tooltip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#tooltip OneDashboard#tooltip}
  */
  readonly tooltip?: OneDashboardPageWidgetAreaTooltip;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetAreaUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetAreaToTerraform(struct?: OneDashboardPageWidgetArea | cdktf.IResolvable): any {
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
    colors: cdktf.listMapper(oneDashboardPageWidgetAreaColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetAreaDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetAreaInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetAreaNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetAreaNullValuesToTerraform, true)(struct!.nullValues),
    tooltip: oneDashboardPageWidgetAreaTooltipToTerraform(struct!.tooltip),
    units: cdktf.listMapper(oneDashboardPageWidgetAreaUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetAreaToHclTerraform(struct?: OneDashboardPageWidgetArea | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetAreaInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaNullValuesList",
    },
    tooltip: {
      value: oneDashboardPageWidgetAreaTooltipToHclTerraform(struct!.tooltip),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaTooltipList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetAreaUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetAreaUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetArea | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetArea | cdktf.IResolvable | undefined) {
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
  private _colors = new OneDashboardPageWidgetAreaColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetAreaColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetAreaDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetAreaDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetAreaInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetAreaInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetAreaNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetAreaNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetAreaNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetAreaNullValues[] | cdktf.IResolvable) {
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
  private _tooltip = new OneDashboardPageWidgetAreaTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: OneDashboardPageWidgetAreaTooltip) {
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
  private _units = new OneDashboardPageWidgetAreaUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetAreaUnits[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetAreaList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetArea[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetAreaOutputReference {
    return new OneDashboardPageWidgetAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBarColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBarColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBarColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBarColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBarColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBarColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBarColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBarColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBarColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBarColorsToTerraform(struct?: OneDashboardPageWidgetBarColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBarColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBarColorsToHclTerraform(struct?: OneDashboardPageWidgetBarColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBarColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBarColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBarColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBarColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarColorsOutputReference {
    return new OneDashboardPageWidgetBarColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetBarDataFormatToTerraform(struct?: OneDashboardPageWidgetBarDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetBarDataFormatToHclTerraform(struct?: OneDashboardPageWidgetBarDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBarDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBarDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBarDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarDataFormatOutputReference {
    return new OneDashboardPageWidgetBarDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetBarInitialSortingToTerraform(struct?: OneDashboardPageWidgetBarInitialSortingOutputReference | OneDashboardPageWidgetBarInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetBarInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetBarInitialSortingOutputReference | OneDashboardPageWidgetBarInitialSorting): any {
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

export class OneDashboardPageWidgetBarInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBarInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetBarNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBarNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBarNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetBarNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetBarNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBarNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBarNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBarNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarNrqlQueryOutputReference {
    return new OneDashboardPageWidgetBarNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBarNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBarNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBarNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBarNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBarNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBarNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBarNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBarNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBarNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBarNullValuesToTerraform(struct?: OneDashboardPageWidgetBarNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBarNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBarNullValuesToHclTerraform(struct?: OneDashboardPageWidgetBarNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBarNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBarNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBarNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBarNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarNullValuesOutputReference {
    return new OneDashboardPageWidgetBarNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetBarUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBarUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetBarUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBarUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBarUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBarUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBarUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBarUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBarUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBarUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBarUnitsToTerraform(struct?: OneDashboardPageWidgetBarUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBarUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBarUnitsToHclTerraform(struct?: OneDashboardPageWidgetBarUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBarUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBarUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBarUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBarUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBarUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBarUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarUnitsOutputReference {
    return new OneDashboardPageWidgetBarUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Use this item to filter the current dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetBarColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetBarDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetBarInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBarNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetBarNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetBarUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBarToTerraform(struct?: OneDashboardPageWidgetBar | cdktf.IResolvable): any {
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
    colors: cdktf.listMapper(oneDashboardPageWidgetBarColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetBarDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetBarInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetBarNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetBarNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetBarUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetBarToHclTerraform(struct?: OneDashboardPageWidgetBar | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetBarInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBarUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBarUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBar | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBar | cdktf.IResolvable | undefined) {
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
  private _colors = new OneDashboardPageWidgetBarColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetBarColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetBarDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetBarDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetBarInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetBarInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetBarNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetBarNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetBarNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetBarNullValues[] | cdktf.IResolvable) {
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
  private _units = new OneDashboardPageWidgetBarUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetBarUnits[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBarList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBar[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBarOutputReference {
    return new OneDashboardPageWidgetBarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardBillboardSettingsGridOptions {
  /**
  * Number of columns in the grid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#columns OneDashboard#columns}
  */
  readonly columns?: number;
  /**
  * Grid label setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#label OneDashboard#label}
  */
  readonly label?: number;
  /**
  * Grid value setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#value OneDashboard#value}
  */
  readonly value?: number;
}

export function oneDashboardPageWidgetBillboardBillboardSettingsGridOptionsToTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsGridOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.numberToTerraform(struct!.columns),
    label: cdktf.numberToTerraform(struct!.label),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function oneDashboardPageWidgetBillboardBillboardSettingsGridOptionsToHclTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsGridOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.numberToHclTerraform(struct!.columns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.numberToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardBillboardSettingsGridOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardBillboardSettingsGridOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: number; 
  public get columns() {
    return this.getNumberAttribute('columns');
  }
  public set columns(value: number) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // label - computed: false, optional: true, required: false
  private _label?: number; 
  public get label() {
    return this.getNumberAttribute('label');
  }
  public set label(value: number) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface OneDashboardPageWidgetBillboardBillboardSettingsLink {
  /**
  * Whether to open the link in a new tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#new_tab OneDashboard#new_tab}
  */
  readonly newTab?: boolean | cdktf.IResolvable;
  /**
  * The title for the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title?: string;
  /**
  * The URL for the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#url OneDashboard#url}
  */
  readonly url?: string;
}

export function oneDashboardPageWidgetBillboardBillboardSettingsLinkToTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsLinkOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_tab: cdktf.booleanToTerraform(struct!.newTab),
    title: cdktf.stringToTerraform(struct!.title),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function oneDashboardPageWidgetBillboardBillboardSettingsLinkToHclTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsLinkOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_tab: {
      value: cdktf.booleanToHclTerraform(struct!.newTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardBillboardSettingsLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardBillboardSettingsLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTab = this._newTab;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardBillboardSettingsLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newTab = undefined;
      this._title = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newTab = value.newTab;
      this._title = value.title;
      this._url = value.url;
    }
  }

  // new_tab - computed: false, optional: true, required: false
  private _newTab?: boolean | cdktf.IResolvable; 
  public get newTab() {
    return this.getBooleanAttribute('new_tab');
  }
  public set newTab(value: boolean | cdktf.IResolvable) {
    this._newTab = value;
  }
  public resetNewTab() {
    this._newTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTabInput() {
    return this._newTab;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface OneDashboardPageWidgetBillboardBillboardSettingsVisual {
  /**
  * Billboard alignment type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#alignment OneDashboard#alignment}
  */
  readonly alignment?: string;
  /**
  * Billboard display type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#display OneDashboard#display}
  */
  readonly display?: string;
}

export function oneDashboardPageWidgetBillboardBillboardSettingsVisualToTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsVisualOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment: cdktf.stringToTerraform(struct!.alignment),
    display: cdktf.stringToTerraform(struct!.display),
  }
}


export function oneDashboardPageWidgetBillboardBillboardSettingsVisualToHclTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsVisualOutputReference | OneDashboardPageWidgetBillboardBillboardSettingsVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment: {
      value: cdktf.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardBillboardSettingsVisualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardBillboardSettingsVisual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardBillboardSettingsVisual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alignment = undefined;
      this._display = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alignment = value.alignment;
      this._display = value.display;
    }
  }

  // alignment - computed: false, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }
}
export interface OneDashboardPageWidgetBillboardBillboardSettings {
  /**
  * grid_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#grid_options OneDashboard#grid_options}
  */
  readonly gridOptions?: OneDashboardPageWidgetBillboardBillboardSettingsGridOptions;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#link OneDashboard#link}
  */
  readonly link?: OneDashboardPageWidgetBillboardBillboardSettingsLink;
  /**
  * visual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#visual OneDashboard#visual}
  */
  readonly visual?: OneDashboardPageWidgetBillboardBillboardSettingsVisual;
}

export function oneDashboardPageWidgetBillboardBillboardSettingsToTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsOutputReference | OneDashboardPageWidgetBillboardBillboardSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grid_options: oneDashboardPageWidgetBillboardBillboardSettingsGridOptionsToTerraform(struct!.gridOptions),
    link: oneDashboardPageWidgetBillboardBillboardSettingsLinkToTerraform(struct!.link),
    visual: oneDashboardPageWidgetBillboardBillboardSettingsVisualToTerraform(struct!.visual),
  }
}


export function oneDashboardPageWidgetBillboardBillboardSettingsToHclTerraform(struct?: OneDashboardPageWidgetBillboardBillboardSettingsOutputReference | OneDashboardPageWidgetBillboardBillboardSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grid_options: {
      value: oneDashboardPageWidgetBillboardBillboardSettingsGridOptionsToHclTerraform(struct!.gridOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsList",
    },
    link: {
      value: oneDashboardPageWidgetBillboardBillboardSettingsLinkToHclTerraform(struct!.link),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardBillboardSettingsLinkList",
    },
    visual: {
      value: oneDashboardPageWidgetBillboardBillboardSettingsVisualToHclTerraform(struct!.visual),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardBillboardSettingsVisualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardBillboardSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardBillboardSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gridOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridOptions = this._gridOptions?.internalValue;
    }
    if (this._link?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link?.internalValue;
    }
    if (this._visual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visual = this._visual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetBillboardBillboardSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gridOptions.internalValue = undefined;
      this._link.internalValue = undefined;
      this._visual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gridOptions.internalValue = value.gridOptions;
      this._link.internalValue = value.link;
      this._visual.internalValue = value.visual;
    }
  }

  // grid_options - computed: false, optional: true, required: false
  private _gridOptions = new OneDashboardPageWidgetBillboardBillboardSettingsGridOptionsOutputReference(this, "grid_options");
  public get gridOptions() {
    return this._gridOptions;
  }
  public putGridOptions(value: OneDashboardPageWidgetBillboardBillboardSettingsGridOptions) {
    this._gridOptions.internalValue = value;
  }
  public resetGridOptions() {
    this._gridOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridOptionsInput() {
    return this._gridOptions.internalValue;
  }

  // link - computed: false, optional: true, required: false
  private _link = new OneDashboardPageWidgetBillboardBillboardSettingsLinkOutputReference(this, "link");
  public get link() {
    return this._link;
  }
  public putLink(value: OneDashboardPageWidgetBillboardBillboardSettingsLink) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // visual - computed: false, optional: true, required: false
  private _visual = new OneDashboardPageWidgetBillboardBillboardSettingsVisualOutputReference(this, "visual");
  public get visual() {
    return this._visual;
  }
  public putVisual(value: OneDashboardPageWidgetBillboardBillboardSettingsVisual) {
    this._visual.internalValue = value;
  }
  public resetVisual() {
    this._visual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualInput() {
    return this._visual.internalValue;
  }
}
export interface OneDashboardPageWidgetBillboardColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBillboardColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBillboardColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBillboardColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBillboardColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBillboardColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboardColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBillboardColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBillboardColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBillboardColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBillboardColorsToTerraform(struct?: OneDashboardPageWidgetBillboardColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBillboardColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBillboardColorsToHclTerraform(struct?: OneDashboardPageWidgetBillboardColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboardColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBillboardColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBillboardColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBillboardColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardColorsOutputReference {
    return new OneDashboardPageWidgetBillboardColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetBillboardDataFormatToTerraform(struct?: OneDashboardPageWidgetBillboardDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetBillboardDataFormatToHclTerraform(struct?: OneDashboardPageWidgetBillboardDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBillboardDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboardDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBillboardDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardDataFormatOutputReference {
    return new OneDashboardPageWidgetBillboardDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetBillboardInitialSortingToTerraform(struct?: OneDashboardPageWidgetBillboardInitialSortingOutputReference | OneDashboardPageWidgetBillboardInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetBillboardInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetBillboardInitialSortingOutputReference | OneDashboardPageWidgetBillboardInitialSorting): any {
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

export class OneDashboardPageWidgetBillboardInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBillboardInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetBillboardNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBillboardNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBillboardNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetBillboardNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetBillboardNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBillboardNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboardNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBillboardNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardNrqlQueryOutputReference {
    return new OneDashboardPageWidgetBillboardNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBillboardNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBillboardNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBillboardNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboardNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBillboardNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBillboardNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBillboardNullValuesToTerraform(struct?: OneDashboardPageWidgetBillboardNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBillboardNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBillboardNullValuesToHclTerraform(struct?: OneDashboardPageWidgetBillboardNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboardNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBillboardNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBillboardNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBillboardNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardNullValuesOutputReference {
    return new OneDashboardPageWidgetBillboardNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetBillboardUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBillboardUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetBillboardUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBillboardUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBillboardUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboardUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBillboardUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBillboardUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboardUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBillboardUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBillboardUnitsToTerraform(struct?: OneDashboardPageWidgetBillboardUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBillboardUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBillboardUnitsToHclTerraform(struct?: OneDashboardPageWidgetBillboardUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboardUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBillboardUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBillboardUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBillboardUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBillboardUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboardUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardUnitsOutputReference {
    return new OneDashboardPageWidgetBillboardUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBillboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * The critical threshold value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#critical OneDashboard#critical}
  */
  readonly critical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * The warning threshold value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#warning OneDashboard#warning}
  */
  readonly warning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * billboard_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#billboard_settings OneDashboard#billboard_settings}
  */
  readonly billboardSettings?: OneDashboardPageWidgetBillboardBillboardSettings;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetBillboardColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetBillboardDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetBillboardInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBillboardNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetBillboardNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetBillboardUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBillboardToTerraform(struct?: OneDashboardPageWidgetBillboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    critical: cdktf.stringToTerraform(struct!.critical),
    facet_show_other_series: cdktf.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktf.numberToTerraform(struct!.height),
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
    legend_enabled: cdktf.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    warning: cdktf.stringToTerraform(struct!.warning),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    billboard_settings: oneDashboardPageWidgetBillboardBillboardSettingsToTerraform(struct!.billboardSettings),
    colors: cdktf.listMapper(oneDashboardPageWidgetBillboardColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetBillboardDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetBillboardInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetBillboardNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetBillboardNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetBillboardUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetBillboardToHclTerraform(struct?: OneDashboardPageWidgetBillboard | cdktf.IResolvable): any {
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
    critical: {
      value: cdktf.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    warning: {
      value: cdktf.stringToHclTerraform(struct!.warning),
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
    billboard_settings: {
      value: oneDashboardPageWidgetBillboardBillboardSettingsToHclTerraform(struct!.billboardSettings),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardBillboardSettingsList",
    },
    colors: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetBillboardInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBillboardUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBillboardUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBillboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBillboard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
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
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
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
    if (this._billboardSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.billboardSettings = this._billboardSettings?.internalValue;
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

  public set internalValue(value: OneDashboardPageWidgetBillboard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._critical = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._warning = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._billboardSettings.internalValue = undefined;
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
      this._critical = value.critical;
      this._facetShowOtherSeries = value.facetShowOtherSeries;
      this._height = value.height;
      this._ignoreTimeRange = value.ignoreTimeRange;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._warning = value.warning;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._billboardSettings.internalValue = value.billboardSettings;
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

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
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

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
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

  // billboard_settings - computed: false, optional: true, required: false
  private _billboardSettings = new OneDashboardPageWidgetBillboardBillboardSettingsOutputReference(this, "billboard_settings");
  public get billboardSettings() {
    return this._billboardSettings;
  }
  public putBillboardSettings(value: OneDashboardPageWidgetBillboardBillboardSettings) {
    this._billboardSettings.internalValue = value;
  }
  public resetBillboardSettings() {
    this._billboardSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billboardSettingsInput() {
    return this._billboardSettings.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetBillboardColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetBillboardColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetBillboardDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetBillboardDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetBillboardInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetBillboardInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetBillboardNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetBillboardNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetBillboardNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetBillboardNullValues[] | cdktf.IResolvable) {
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
  private _units = new OneDashboardPageWidgetBillboardUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetBillboardUnits[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBillboardList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBillboard[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBillboardOutputReference {
    return new OneDashboardPageWidgetBillboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBulletColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBulletColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBulletColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBulletColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBulletColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBulletColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBulletColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBulletColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBulletColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBulletColorsToTerraform(struct?: OneDashboardPageWidgetBulletColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBulletColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBulletColorsToHclTerraform(struct?: OneDashboardPageWidgetBulletColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBulletColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBulletColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBulletColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBulletColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletColorsOutputReference {
    return new OneDashboardPageWidgetBulletColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetBulletDataFormatToTerraform(struct?: OneDashboardPageWidgetBulletDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetBulletDataFormatToHclTerraform(struct?: OneDashboardPageWidgetBulletDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBulletDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBulletDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBulletDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletDataFormatOutputReference {
    return new OneDashboardPageWidgetBulletDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetBulletInitialSortingToTerraform(struct?: OneDashboardPageWidgetBulletInitialSortingOutputReference | OneDashboardPageWidgetBulletInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetBulletInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetBulletInitialSortingOutputReference | OneDashboardPageWidgetBulletInitialSorting): any {
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

export class OneDashboardPageWidgetBulletInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetBulletInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetBulletNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBulletNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBulletNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetBulletNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetBulletNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBulletNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBulletNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBulletNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletNrqlQueryOutputReference {
    return new OneDashboardPageWidgetBulletNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetBulletNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBulletNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetBulletNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBulletNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBulletNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBulletNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBulletNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBulletNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBulletNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBulletNullValuesToTerraform(struct?: OneDashboardPageWidgetBulletNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBulletNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBulletNullValuesToHclTerraform(struct?: OneDashboardPageWidgetBulletNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBulletNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBulletNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBulletNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBulletNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletNullValuesOutputReference {
    return new OneDashboardPageWidgetBulletNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetBulletUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetBulletUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetBulletUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetBulletUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetBulletUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBulletUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetBulletUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetBulletUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBulletUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetBulletUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBulletUnitsToTerraform(struct?: OneDashboardPageWidgetBulletUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetBulletUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetBulletUnitsToHclTerraform(struct?: OneDashboardPageWidgetBulletUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBulletUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetBulletUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetBulletUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetBulletUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBulletUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBulletUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletUnitsOutputReference {
    return new OneDashboardPageWidgetBulletUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetBullet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum value for the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#limit OneDashboard#limit}
  */
  readonly limit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetBulletColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetBulletDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetBulletInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBulletNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetBulletNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetBulletUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetBulletToTerraform(struct?: OneDashboardPageWidgetBullet | cdktf.IResolvable): any {
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
    limit: cdktf.numberToTerraform(struct!.limit),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    colors: cdktf.listMapper(oneDashboardPageWidgetBulletColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetBulletDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetBulletInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetBulletNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetBulletNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetBulletUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetBulletToHclTerraform(struct?: OneDashboardPageWidgetBullet | cdktf.IResolvable): any {
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
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetBulletInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetBulletUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetBulletUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetBulletOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetBullet | cdktf.IResolvable | undefined {
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
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
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

  public set internalValue(value: OneDashboardPageWidgetBullet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._legendEnabled = undefined;
      this._limit = undefined;
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
      this._limit = value.limit;
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

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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
  private _colors = new OneDashboardPageWidgetBulletColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetBulletColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetBulletDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetBulletDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetBulletInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetBulletInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetBulletNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetBulletNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetBulletNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetBulletNullValues[] | cdktf.IResolvable) {
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
  private _units = new OneDashboardPageWidgetBulletUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetBulletUnits[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetBulletList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetBullet[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetBulletOutputReference {
    return new OneDashboardPageWidgetBulletOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetFunnelColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetFunnelColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetFunnelColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetFunnelColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetFunnelColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnelColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetFunnelColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetFunnelColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetFunnelColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetFunnelColorsToTerraform(struct?: OneDashboardPageWidgetFunnelColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetFunnelColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetFunnelColorsToHclTerraform(struct?: OneDashboardPageWidgetFunnelColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnelColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetFunnelColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetFunnelColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetFunnelColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelColorsOutputReference {
    return new OneDashboardPageWidgetFunnelColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetFunnelDataFormatToTerraform(struct?: OneDashboardPageWidgetFunnelDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetFunnelDataFormatToHclTerraform(struct?: OneDashboardPageWidgetFunnelDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetFunnelDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnelDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetFunnelDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelDataFormatOutputReference {
    return new OneDashboardPageWidgetFunnelDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetFunnelInitialSortingToTerraform(struct?: OneDashboardPageWidgetFunnelInitialSortingOutputReference | OneDashboardPageWidgetFunnelInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetFunnelInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetFunnelInitialSortingOutputReference | OneDashboardPageWidgetFunnelInitialSorting): any {
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

export class OneDashboardPageWidgetFunnelInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetFunnelInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetFunnelNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetFunnelNrqlQueryToTerraform(struct?: OneDashboardPageWidgetFunnelNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetFunnelNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetFunnelNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetFunnelNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnelNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetFunnelNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelNrqlQueryOutputReference {
    return new OneDashboardPageWidgetFunnelNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetFunnelNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetFunnelNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetFunnelNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnelNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetFunnelNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetFunnelNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetFunnelNullValuesToTerraform(struct?: OneDashboardPageWidgetFunnelNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetFunnelNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetFunnelNullValuesToHclTerraform(struct?: OneDashboardPageWidgetFunnelNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnelNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetFunnelNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetFunnelNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetFunnelNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelNullValuesOutputReference {
    return new OneDashboardPageWidgetFunnelNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetFunnelUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetFunnelUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetFunnelUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetFunnelUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetFunnelUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnelUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetFunnelUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetFunnelUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnelUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetFunnelUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetFunnelUnitsToTerraform(struct?: OneDashboardPageWidgetFunnelUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetFunnelUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetFunnelUnitsToHclTerraform(struct?: OneDashboardPageWidgetFunnelUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnelUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnelUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetFunnelUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetFunnelUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetFunnelUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnelUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelUnitsOutputReference {
    return new OneDashboardPageWidgetFunnelUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetFunnel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetFunnelColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetFunnelDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetFunnelInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetFunnelNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetFunnelNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetFunnelUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetFunnelToTerraform(struct?: OneDashboardPageWidgetFunnel | cdktf.IResolvable): any {
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
    colors: cdktf.listMapper(oneDashboardPageWidgetFunnelColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetFunnelDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetFunnelInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetFunnelNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetFunnelNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetFunnelUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetFunnelToHclTerraform(struct?: OneDashboardPageWidgetFunnel | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetFunnelInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetFunnelUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetFunnelUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetFunnelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetFunnel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetFunnel | cdktf.IResolvable | undefined) {
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
  private _colors = new OneDashboardPageWidgetFunnelColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetFunnelColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetFunnelDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetFunnelDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetFunnelInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetFunnelInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetFunnelNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetFunnelNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetFunnelNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetFunnelNullValues[] | cdktf.IResolvable) {
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
  private _units = new OneDashboardPageWidgetFunnelUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetFunnelUnits[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetFunnelList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetFunnel[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetFunnelOutputReference {
    return new OneDashboardPageWidgetFunnelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetHeatmapColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHeatmapColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetHeatmapColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHeatmapColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmapColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHeatmapColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHeatmapColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHeatmapColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetHeatmapColorsToTerraform(struct?: OneDashboardPageWidgetHeatmapColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetHeatmapColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHeatmapColorsToHclTerraform(struct?: OneDashboardPageWidgetHeatmapColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmapColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetHeatmapColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHeatmapColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetHeatmapColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapColorsOutputReference {
    return new OneDashboardPageWidgetHeatmapColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetHeatmapDataFormatToTerraform(struct?: OneDashboardPageWidgetHeatmapDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetHeatmapDataFormatToHclTerraform(struct?: OneDashboardPageWidgetHeatmapDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHeatmapDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmapDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHeatmapDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapDataFormatOutputReference {
    return new OneDashboardPageWidgetHeatmapDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetHeatmapInitialSortingToTerraform(struct?: OneDashboardPageWidgetHeatmapInitialSortingOutputReference | OneDashboardPageWidgetHeatmapInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetHeatmapInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetHeatmapInitialSortingOutputReference | OneDashboardPageWidgetHeatmapInitialSorting): any {
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

export class OneDashboardPageWidgetHeatmapInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetHeatmapInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetHeatmapNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetHeatmapNrqlQueryToTerraform(struct?: OneDashboardPageWidgetHeatmapNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetHeatmapNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetHeatmapNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHeatmapNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmapNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHeatmapNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapNrqlQueryOutputReference {
    return new OneDashboardPageWidgetHeatmapNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetHeatmapNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetHeatmapNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetHeatmapNullValuesToTerraform(struct?: OneDashboardPageWidgetHeatmapNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetHeatmapNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHeatmapNullValuesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmapNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetHeatmapNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHeatmapNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetHeatmapNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapNullValuesOutputReference {
    return new OneDashboardPageWidgetHeatmapNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetHeatmapUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetHeatmapUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHeatmapUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmapUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHeatmapUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHeatmapUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmapUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetHeatmapUnitsToTerraform(struct?: OneDashboardPageWidgetHeatmapUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetHeatmapUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHeatmapUnitsToHclTerraform(struct?: OneDashboardPageWidgetHeatmapUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmapUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmapUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetHeatmapUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHeatmapUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetHeatmapUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmapUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapUnitsOutputReference {
    return new OneDashboardPageWidgetHeatmapUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHeatmap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Use this item to filter the current dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetHeatmapColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetHeatmapDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetHeatmapInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetHeatmapNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetHeatmapNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetHeatmapUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetHeatmapToTerraform(struct?: OneDashboardPageWidgetHeatmap | cdktf.IResolvable): any {
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
    colors: cdktf.listMapper(oneDashboardPageWidgetHeatmapColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetHeatmapDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetHeatmapInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetHeatmapNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetHeatmapNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetHeatmapUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetHeatmapToHclTerraform(struct?: OneDashboardPageWidgetHeatmap | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetHeatmapInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHeatmapUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHeatmapUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHeatmapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHeatmap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHeatmap | cdktf.IResolvable | undefined) {
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
  private _colors = new OneDashboardPageWidgetHeatmapColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetHeatmapColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetHeatmapDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetHeatmapDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetHeatmapInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetHeatmapInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetHeatmapNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetHeatmapNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetHeatmapNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetHeatmapNullValues[] | cdktf.IResolvable) {
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
  private _units = new OneDashboardPageWidgetHeatmapUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetHeatmapUnits[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetHeatmapList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHeatmap[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHeatmapOutputReference {
    return new OneDashboardPageWidgetHeatmapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetHistogramColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHistogramColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetHistogramColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHistogramColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHistogramColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogramColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHistogramColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHistogramColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHistogramColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetHistogramColorsToTerraform(struct?: OneDashboardPageWidgetHistogramColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetHistogramColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHistogramColorsToHclTerraform(struct?: OneDashboardPageWidgetHistogramColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogramColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetHistogramColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHistogramColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetHistogramColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramColorsOutputReference {
    return new OneDashboardPageWidgetHistogramColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetHistogramDataFormatToTerraform(struct?: OneDashboardPageWidgetHistogramDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetHistogramDataFormatToHclTerraform(struct?: OneDashboardPageWidgetHistogramDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHistogramDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogramDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHistogramDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramDataFormatOutputReference {
    return new OneDashboardPageWidgetHistogramDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetHistogramInitialSortingToTerraform(struct?: OneDashboardPageWidgetHistogramInitialSortingOutputReference | OneDashboardPageWidgetHistogramInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetHistogramInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetHistogramInitialSortingOutputReference | OneDashboardPageWidgetHistogramInitialSorting): any {
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

export class OneDashboardPageWidgetHistogramInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetHistogramInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetHistogramNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetHistogramNrqlQueryToTerraform(struct?: OneDashboardPageWidgetHistogramNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetHistogramNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetHistogramNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHistogramNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogramNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHistogramNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramNrqlQueryOutputReference {
    return new OneDashboardPageWidgetHistogramNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetHistogramNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetHistogramNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHistogramNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogramNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHistogramNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHistogramNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetHistogramNullValuesToTerraform(struct?: OneDashboardPageWidgetHistogramNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetHistogramNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHistogramNullValuesToHclTerraform(struct?: OneDashboardPageWidgetHistogramNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogramNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetHistogramNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHistogramNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetHistogramNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramNullValuesOutputReference {
    return new OneDashboardPageWidgetHistogramNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetHistogramUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetHistogramUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetHistogramUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetHistogramUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetHistogramUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogramUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetHistogramUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetHistogramUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogramUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetHistogramUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetHistogramUnitsToTerraform(struct?: OneDashboardPageWidgetHistogramUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetHistogramUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetHistogramUnitsToHclTerraform(struct?: OneDashboardPageWidgetHistogramUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogramUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogramUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetHistogramUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetHistogramUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetHistogramUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogramUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramUnitsOutputReference {
    return new OneDashboardPageWidgetHistogramUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetHistogram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetHistogramColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetHistogramDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetHistogramInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetHistogramNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetHistogramNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetHistogramUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetHistogramToTerraform(struct?: OneDashboardPageWidgetHistogram | cdktf.IResolvable): any {
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
    colors: cdktf.listMapper(oneDashboardPageWidgetHistogramColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetHistogramDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetHistogramInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetHistogramNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetHistogramNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetHistogramUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetHistogramToHclTerraform(struct?: OneDashboardPageWidgetHistogram | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetHistogramInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetHistogramUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetHistogramUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetHistogramOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetHistogram | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetHistogram | cdktf.IResolvable | undefined) {
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
  private _colors = new OneDashboardPageWidgetHistogramColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetHistogramColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetHistogramDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetHistogramDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetHistogramInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetHistogramInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetHistogramNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetHistogramNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetHistogramNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetHistogramNullValues[] | cdktf.IResolvable) {
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
  private _units = new OneDashboardPageWidgetHistogramUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetHistogramUnits[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetHistogramList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetHistogram[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetHistogramOutputReference {
    return new OneDashboardPageWidgetHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetJsonColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetJsonColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetJsonColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetJsonColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetJsonColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJsonColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetJsonColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetJsonColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetJsonColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetJsonColorsToTerraform(struct?: OneDashboardPageWidgetJsonColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetJsonColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetJsonColorsToHclTerraform(struct?: OneDashboardPageWidgetJsonColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJsonColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetJsonColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetJsonColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetJsonColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonColorsOutputReference {
    return new OneDashboardPageWidgetJsonColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetJsonDataFormatToTerraform(struct?: OneDashboardPageWidgetJsonDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetJsonDataFormatToHclTerraform(struct?: OneDashboardPageWidgetJsonDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetJsonDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJsonDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetJsonDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonDataFormatOutputReference {
    return new OneDashboardPageWidgetJsonDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetJsonInitialSortingToTerraform(struct?: OneDashboardPageWidgetJsonInitialSortingOutputReference | OneDashboardPageWidgetJsonInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetJsonInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetJsonInitialSortingOutputReference | OneDashboardPageWidgetJsonInitialSorting): any {
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

export class OneDashboardPageWidgetJsonInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetJsonInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetJsonNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetJsonNrqlQueryToTerraform(struct?: OneDashboardPageWidgetJsonNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetJsonNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetJsonNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetJsonNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJsonNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetJsonNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonNrqlQueryOutputReference {
    return new OneDashboardPageWidgetJsonNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetJsonNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetJsonNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetJsonNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetJsonNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetJsonNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJsonNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetJsonNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetJsonNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetJsonNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetJsonNullValuesToTerraform(struct?: OneDashboardPageWidgetJsonNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetJsonNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetJsonNullValuesToHclTerraform(struct?: OneDashboardPageWidgetJsonNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJsonNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetJsonNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetJsonNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetJsonNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonNullValuesOutputReference {
    return new OneDashboardPageWidgetJsonNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetJsonUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetJsonUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetJsonUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetJsonUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetJsonUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJsonUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetJsonUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetJsonUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJsonUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetJsonUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetJsonUnitsToTerraform(struct?: OneDashboardPageWidgetJsonUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetJsonUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetJsonUnitsToHclTerraform(struct?: OneDashboardPageWidgetJsonUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJsonUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJsonUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetJsonUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetJsonUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetJsonUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJsonUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonUnitsOutputReference {
    return new OneDashboardPageWidgetJsonUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetJsonColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetJsonDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetJsonInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetJsonNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetJsonNullValues[] | cdktf.IResolvable;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetJsonUnits[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetJsonToTerraform(struct?: OneDashboardPageWidgetJson | cdktf.IResolvable): any {
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
    colors: cdktf.listMapper(oneDashboardPageWidgetJsonColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetJsonDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetJsonInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetJsonNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetJsonNullValuesToTerraform, true)(struct!.nullValues),
    units: cdktf.listMapper(oneDashboardPageWidgetJsonUnitsToTerraform, true)(struct!.units),
  }
}


export function oneDashboardPageWidgetJsonToHclTerraform(struct?: OneDashboardPageWidgetJson | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetJsonInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonNullValuesList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetJsonUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetJsonUnitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetJson | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetJson | cdktf.IResolvable | undefined) {
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
  private _colors = new OneDashboardPageWidgetJsonColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetJsonColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetJsonDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetJsonDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetJsonInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetJsonInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetJsonNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetJsonNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetJsonNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetJsonNullValues[] | cdktf.IResolvable) {
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
  private _units = new OneDashboardPageWidgetJsonUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetJsonUnits[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetJsonList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetJson[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetJsonOutputReference {
    return new OneDashboardPageWidgetJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetLineColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetLineColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetLineColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetLineColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLineColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLineColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetLineColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetLineColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetLineColorsToTerraform(struct?: OneDashboardPageWidgetLineColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetLineColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetLineColorsToHclTerraform(struct?: OneDashboardPageWidgetLineColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetLineColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetLineColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetLineColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineColorsOutputReference {
    return new OneDashboardPageWidgetLineColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetLineDataFormatToTerraform(struct?: OneDashboardPageWidgetLineDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetLineDataFormatToHclTerraform(struct?: OneDashboardPageWidgetLineDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLineDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLineDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineDataFormatOutputReference {
    return new OneDashboardPageWidgetLineDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetLineInitialSortingToTerraform(struct?: OneDashboardPageWidgetLineInitialSortingOutputReference | OneDashboardPageWidgetLineInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetLineInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetLineInitialSortingOutputReference | OneDashboardPageWidgetLineInitialSorting): any {
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

export class OneDashboardPageWidgetLineInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetLineInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetLineNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetLineNrqlQueryToTerraform(struct?: OneDashboardPageWidgetLineNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetLineNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetLineNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLineNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLineNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineNrqlQueryOutputReference {
    return new OneDashboardPageWidgetLineNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetLineNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetLineNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetLineNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetLineNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLineNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLineNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetLineNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineNullValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetLineNullValuesSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetLineNullValuesToTerraform(struct?: OneDashboardPageWidgetLineNullValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetLineNullValuesSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetLineNullValuesToHclTerraform(struct?: OneDashboardPageWidgetLineNullValues | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineNullValuesSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineNullValuesSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineNullValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineNullValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineNullValues | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetLineNullValuesSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetLineNullValuesSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetLineNullValuesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineNullValues[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineNullValuesOutputReference {
    return new OneDashboardPageWidgetLineNullValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineThreshold {
  /**
  * The number from which the range starts in thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#from OneDashboard#from}
  */
  readonly from?: string;
  /**
  * Name of the threshold created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name?: string;
  /**
  * Severity of the threshold, which would reflect in the widget, in the range of the threshold specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#severity OneDashboard#severity}
  */
  readonly severity?: string;
  /**
  * The number at which the range ends in thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#to OneDashboard#to}
  */
  readonly to?: string;
}

export function oneDashboardPageWidgetLineThresholdToTerraform(struct?: OneDashboardPageWidgetLineThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    name: cdktf.stringToTerraform(struct!.name),
    severity: cdktf.stringToTerraform(struct!.severity),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function oneDashboardPageWidgetLineThresholdToHclTerraform(struct?: OneDashboardPageWidgetLineThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
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

export class OneDashboardPageWidgetLineThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: OneDashboardPageWidgetLineThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._name = undefined;
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
      this._from = value.from;
      this._name = value.name;
      this._severity = value.severity;
      this._to = value.to;
    }
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class OneDashboardPageWidgetLineThresholdList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineThreshold[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineThresholdOutputReference {
    return new OneDashboardPageWidgetLineThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineTooltip {
  /**
  * Tooltip display mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#mode OneDashboard#mode}
  */
  readonly mode: string;
}

export function oneDashboardPageWidgetLineTooltipToTerraform(struct?: OneDashboardPageWidgetLineTooltipOutputReference | OneDashboardPageWidgetLineTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function oneDashboardPageWidgetLineTooltipToHclTerraform(struct?: OneDashboardPageWidgetLineTooltipOutputReference | OneDashboardPageWidgetLineTooltip): any {
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

export class OneDashboardPageWidgetLineTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetLineTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineTooltip | undefined) {
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
export interface OneDashboardPageWidgetLineUnitsSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
  /**
  * Unit name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
}

export function oneDashboardPageWidgetLineUnitsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetLineUnitsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function oneDashboardPageWidgetLineUnitsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetLineUnitsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLineUnitsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineUnitsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineUnitsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLineUnitsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineUnitsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineUnitsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetLineUnitsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#unit OneDashboard#unit}
  */
  readonly unit?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetLineUnitsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetLineUnitsToTerraform(struct?: OneDashboardPageWidgetLineUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetLineUnitsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetLineUnitsToHclTerraform(struct?: OneDashboardPageWidgetLineUnits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineUnitsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineUnitsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLineUnits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLineUnits | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetLineUnitsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetLineUnitsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetLineUnitsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLineUnits[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineUnitsOutputReference {
    return new OneDashboardPageWidgetLineUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLineYAxisRight {
  /**
  * Minimum value of the range to be specified with the Y-Axis on the right of the line widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_right_max OneDashboard#y_axis_right_max}
  */
  readonly yAxisRightMax?: number;
  /**
  * Minimum value of the range to be specified with the Y-Axis on the right of the line widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_right_min OneDashboard#y_axis_right_min}
  */
  readonly yAxisRightMin?: number;
  /**
  * A set of series that helps specify the Y-Axis on the right of the line widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_right_series OneDashboard#y_axis_right_series}
  */
  readonly yAxisRightSeries?: string[];
  /**
  * An attribute that helps specify the Y-Axis on the right of the line widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_right_zero OneDashboard#y_axis_right_zero}
  */
  readonly yAxisRightZero?: boolean | cdktf.IResolvable;
}

export function oneDashboardPageWidgetLineYAxisRightToTerraform(struct?: OneDashboardPageWidgetLineYAxisRightOutputReference | OneDashboardPageWidgetLineYAxisRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    y_axis_right_max: cdktf.numberToTerraform(struct!.yAxisRightMax),
    y_axis_right_min: cdktf.numberToTerraform(struct!.yAxisRightMin),
    y_axis_right_series: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.yAxisRightSeries),
    y_axis_right_zero: cdktf.booleanToTerraform(struct!.yAxisRightZero),
  }
}


export function oneDashboardPageWidgetLineYAxisRightToHclTerraform(struct?: OneDashboardPageWidgetLineYAxisRightOutputReference | OneDashboardPageWidgetLineYAxisRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    y_axis_right_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisRightMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_right_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisRightMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_right_series: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.yAxisRightSeries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    y_axis_right_zero: {
      value: cdktf.booleanToHclTerraform(struct!.yAxisRightZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineYAxisRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetLineYAxisRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._yAxisRightMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisRightMax = this._yAxisRightMax;
    }
    if (this._yAxisRightMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisRightMin = this._yAxisRightMin;
    }
    if (this._yAxisRightSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisRightSeries = this._yAxisRightSeries;
    }
    if (this._yAxisRightZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisRightZero = this._yAxisRightZero;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLineYAxisRight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._yAxisRightMax = undefined;
      this._yAxisRightMin = undefined;
      this._yAxisRightSeries = undefined;
      this._yAxisRightZero = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._yAxisRightMax = value.yAxisRightMax;
      this._yAxisRightMin = value.yAxisRightMin;
      this._yAxisRightSeries = value.yAxisRightSeries;
      this._yAxisRightZero = value.yAxisRightZero;
    }
  }

  // y_axis_right_max - computed: false, optional: true, required: false
  private _yAxisRightMax?: number; 
  public get yAxisRightMax() {
    return this.getNumberAttribute('y_axis_right_max');
  }
  public set yAxisRightMax(value: number) {
    this._yAxisRightMax = value;
  }
  public resetYAxisRightMax() {
    this._yAxisRightMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisRightMaxInput() {
    return this._yAxisRightMax;
  }

  // y_axis_right_min - computed: false, optional: true, required: false
  private _yAxisRightMin?: number; 
  public get yAxisRightMin() {
    return this.getNumberAttribute('y_axis_right_min');
  }
  public set yAxisRightMin(value: number) {
    this._yAxisRightMin = value;
  }
  public resetYAxisRightMin() {
    this._yAxisRightMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisRightMinInput() {
    return this._yAxisRightMin;
  }

  // y_axis_right_series - computed: false, optional: true, required: false
  private _yAxisRightSeries?: string[]; 
  public get yAxisRightSeries() {
    return cdktf.Fn.tolist(this.getListAttribute('y_axis_right_series'));
  }
  public set yAxisRightSeries(value: string[]) {
    this._yAxisRightSeries = value;
  }
  public resetYAxisRightSeries() {
    this._yAxisRightSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisRightSeriesInput() {
    return this._yAxisRightSeries;
  }

  // y_axis_right_zero - computed: false, optional: true, required: false
  private _yAxisRightZero?: boolean | cdktf.IResolvable; 
  public get yAxisRightZero() {
    return this.getBooleanAttribute('y_axis_right_zero');
  }
  public set yAxisRightZero(value: boolean | cdktf.IResolvable) {
    this._yAxisRightZero = value;
  }
  public resetYAxisRightZero() {
    this._yAxisRightZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisRightZeroInput() {
    return this._yAxisRightZero;
  }
}
export interface OneDashboardPageWidgetLine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#facet_show_other_series OneDashboard#facet_show_other_series}
  */
  readonly facetShowOtherSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#ignore_time_range OneDashboard#ignore_time_range}
  */
  readonly ignoreTimeRange?: boolean | cdktf.IResolvable;
  /**
  * Specified if the label should be visible in the graph created when specified with thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#is_label_visible OneDashboard#is_label_visible}
  */
  readonly isLabelVisible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#legend_enabled OneDashboard#legend_enabled}
  */
  readonly legendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#refresh_rate OneDashboard#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_max OneDashboard#y_axis_left_max}
  */
  readonly yAxisLeftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_min OneDashboard#y_axis_left_min}
  */
  readonly yAxisLeftMin?: number;
  /**
  * Specifies if the values on the graph to be rendered need to be fit to scale, or printed within the specified range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_left_zero OneDashboard#y_axis_left_zero}
  */
  readonly yAxisLeftZero?: boolean | cdktf.IResolvable;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#colors OneDashboard#colors}
  */
  readonly colors?: OneDashboardPageWidgetLineColors[] | cdktf.IResolvable;
  /**
  * data_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#data_format OneDashboard#data_format}
  */
  readonly dataFormat?: OneDashboardPageWidgetLineDataFormat[] | cdktf.IResolvable;
  /**
  * initial_sorting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#initial_sorting OneDashboard#initial_sorting}
  */
  readonly initialSorting?: OneDashboardPageWidgetLineInitialSorting;
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetLineNrqlQuery[] | cdktf.IResolvable;
  /**
  * null_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_values OneDashboard#null_values}
  */
  readonly nullValues?: OneDashboardPageWidgetLineNullValues[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#threshold OneDashboard#threshold}
  */
  readonly threshold?: OneDashboardPageWidgetLineThreshold[] | cdktf.IResolvable;
  /**
  * tooltip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#tooltip OneDashboard#tooltip}
  */
  readonly tooltip?: OneDashboardPageWidgetLineTooltip;
  /**
  * units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#units OneDashboard#units}
  */
  readonly units?: OneDashboardPageWidgetLineUnits[] | cdktf.IResolvable;
  /**
  * y_axis_right block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#y_axis_right OneDashboard#y_axis_right}
  */
  readonly yAxisRight?: OneDashboardPageWidgetLineYAxisRight;
}

export function oneDashboardPageWidgetLineToTerraform(struct?: OneDashboardPageWidgetLine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    facet_show_other_series: cdktf.booleanToTerraform(struct!.facetShowOtherSeries),
    height: cdktf.numberToTerraform(struct!.height),
    ignore_time_range: cdktf.booleanToTerraform(struct!.ignoreTimeRange),
    is_label_visible: cdktf.booleanToTerraform(struct!.isLabelVisible),
    legend_enabled: cdktf.booleanToTerraform(struct!.legendEnabled),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    y_axis_left_max: cdktf.numberToTerraform(struct!.yAxisLeftMax),
    y_axis_left_min: cdktf.numberToTerraform(struct!.yAxisLeftMin),
    y_axis_left_zero: cdktf.booleanToTerraform(struct!.yAxisLeftZero),
    colors: cdktf.listMapper(oneDashboardPageWidgetLineColorsToTerraform, true)(struct!.colors),
    data_format: cdktf.listMapper(oneDashboardPageWidgetLineDataFormatToTerraform, true)(struct!.dataFormat),
    initial_sorting: oneDashboardPageWidgetLineInitialSortingToTerraform(struct!.initialSorting),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetLineNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    null_values: cdktf.listMapper(oneDashboardPageWidgetLineNullValuesToTerraform, true)(struct!.nullValues),
    threshold: cdktf.listMapper(oneDashboardPageWidgetLineThresholdToTerraform, true)(struct!.threshold),
    tooltip: oneDashboardPageWidgetLineTooltipToTerraform(struct!.tooltip),
    units: cdktf.listMapper(oneDashboardPageWidgetLineUnitsToTerraform, true)(struct!.units),
    y_axis_right: oneDashboardPageWidgetLineYAxisRightToTerraform(struct!.yAxisRight),
  }
}


export function oneDashboardPageWidgetLineToHclTerraform(struct?: OneDashboardPageWidgetLine | cdktf.IResolvable): any {
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
    is_label_visible: {
      value: cdktf.booleanToHclTerraform(struct!.isLabelVisible),
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
    y_axis_left_zero: {
      value: cdktf.booleanToHclTerraform(struct!.yAxisLeftZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    colors: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineColorsList",
    },
    data_format: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineDataFormatToHclTerraform, true)(struct!.dataFormat),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineDataFormatList",
    },
    initial_sorting: {
      value: oneDashboardPageWidgetLineInitialSortingToHclTerraform(struct!.initialSorting),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineInitialSortingList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineNrqlQueryList",
    },
    null_values: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineNullValuesToHclTerraform, true)(struct!.nullValues),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineNullValuesList",
    },
    threshold: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineThresholdList",
    },
    tooltip: {
      value: oneDashboardPageWidgetLineTooltipToHclTerraform(struct!.tooltip),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineTooltipList",
    },
    units: {
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLineUnitsToHclTerraform, true)(struct!.units),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineUnitsList",
    },
    y_axis_right: {
      value: oneDashboardPageWidgetLineYAxisRightToHclTerraform(struct!.yAxisRight),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLineYAxisRightList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLine | cdktf.IResolvable | undefined {
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
    if (this._isLabelVisible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLabelVisible = this._isLabelVisible;
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
    if (this._yAxisLeftZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLeftZero = this._yAxisLeftZero;
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
    if (this._tooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip?.internalValue;
    }
    if (this._units?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units?.internalValue;
    }
    if (this._yAxisRight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisRight = this._yAxisRight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneDashboardPageWidgetLine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._facetShowOtherSeries = undefined;
      this._height = undefined;
      this._ignoreTimeRange = undefined;
      this._isLabelVisible = undefined;
      this._legendEnabled = undefined;
      this._refreshRate = undefined;
      this._row = undefined;
      this._title = undefined;
      this._width = undefined;
      this._yAxisLeftMax = undefined;
      this._yAxisLeftMin = undefined;
      this._yAxisLeftZero = undefined;
      this._colors.internalValue = undefined;
      this._dataFormat.internalValue = undefined;
      this._initialSorting.internalValue = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._nullValues.internalValue = undefined;
      this._threshold.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._units.internalValue = undefined;
      this._yAxisRight.internalValue = undefined;
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
      this._isLabelVisible = value.isLabelVisible;
      this._legendEnabled = value.legendEnabled;
      this._refreshRate = value.refreshRate;
      this._row = value.row;
      this._title = value.title;
      this._width = value.width;
      this._yAxisLeftMax = value.yAxisLeftMax;
      this._yAxisLeftMin = value.yAxisLeftMin;
      this._yAxisLeftZero = value.yAxisLeftZero;
      this._colors.internalValue = value.colors;
      this._dataFormat.internalValue = value.dataFormat;
      this._initialSorting.internalValue = value.initialSorting;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._nullValues.internalValue = value.nullValues;
      this._threshold.internalValue = value.threshold;
      this._tooltip.internalValue = value.tooltip;
      this._units.internalValue = value.units;
      this._yAxisRight.internalValue = value.yAxisRight;
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

  // is_label_visible - computed: false, optional: true, required: false
  private _isLabelVisible?: boolean | cdktf.IResolvable; 
  public get isLabelVisible() {
    return this.getBooleanAttribute('is_label_visible');
  }
  public set isLabelVisible(value: boolean | cdktf.IResolvable) {
    this._isLabelVisible = value;
  }
  public resetIsLabelVisible() {
    this._isLabelVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLabelVisibleInput() {
    return this._isLabelVisible;
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

  // y_axis_left_zero - computed: false, optional: true, required: false
  private _yAxisLeftZero?: boolean | cdktf.IResolvable; 
  public get yAxisLeftZero() {
    return this.getBooleanAttribute('y_axis_left_zero');
  }
  public set yAxisLeftZero(value: boolean | cdktf.IResolvable) {
    this._yAxisLeftZero = value;
  }
  public resetYAxisLeftZero() {
    this._yAxisLeftZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLeftZeroInput() {
    return this._yAxisLeftZero;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new OneDashboardPageWidgetLineColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: OneDashboardPageWidgetLineColors[] | cdktf.IResolvable) {
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
  private _dataFormat = new OneDashboardPageWidgetLineDataFormatList(this, "data_format", false);
  public get dataFormat() {
    return this._dataFormat;
  }
  public putDataFormat(value: OneDashboardPageWidgetLineDataFormat[] | cdktf.IResolvable) {
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
  private _initialSorting = new OneDashboardPageWidgetLineInitialSortingOutputReference(this, "initial_sorting");
  public get initialSorting() {
    return this._initialSorting;
  }
  public putInitialSorting(value: OneDashboardPageWidgetLineInitialSorting) {
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
  private _nrqlQuery = new OneDashboardPageWidgetLineNrqlQueryList(this, "nrql_query", false);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: OneDashboardPageWidgetLineNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // null_values - computed: false, optional: true, required: false
  private _nullValues = new OneDashboardPageWidgetLineNullValuesList(this, "null_values", false);
  public get nullValues() {
    return this._nullValues;
  }
  public putNullValues(value: OneDashboardPageWidgetLineNullValues[] | cdktf.IResolvable) {
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
  private _threshold = new OneDashboardPageWidgetLineThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: OneDashboardPageWidgetLineThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip = new OneDashboardPageWidgetLineTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: OneDashboardPageWidgetLineTooltip) {
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
  private _units = new OneDashboardPageWidgetLineUnitsList(this, "units", false);
  public get units() {
    return this._units;
  }
  public putUnits(value: OneDashboardPageWidgetLineUnits[] | cdktf.IResolvable) {
    this._units.internalValue = value;
  }
  public resetUnits() {
    this._units.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units.internalValue;
  }

  // y_axis_right - computed: false, optional: true, required: false
  private _yAxisRight = new OneDashboardPageWidgetLineYAxisRightOutputReference(this, "y_axis_right");
  public get yAxisRight() {
    return this._yAxisRight;
  }
  public putYAxisRight(value: OneDashboardPageWidgetLineYAxisRight) {
    this._yAxisRight.internalValue = value;
  }
  public resetYAxisRight() {
    this._yAxisRight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisRightInput() {
    return this._yAxisRight.internalValue;
  }
}

export class OneDashboardPageWidgetLineList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLine[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLineOutputReference {
    return new OneDashboardPageWidgetLineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLogTableColorsSeriesOverrides {
  /**
  * Color code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetLogTableColorsSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetLogTableColorsSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetLogTableColorsSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetLogTableColorsSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLogTableColorsSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTableColorsSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLogTableColorsSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLogTableColorsSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTableColorsSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableColorsSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetLogTableColorsSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLogTableColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#color OneDashboard#color}
  */
  readonly color?: string;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_overrides OneDashboard#series_overrides}
  */
  readonly seriesOverrides?: OneDashboardPageWidgetLogTableColorsSeriesOverrides[] | cdktf.IResolvable;
}

export function oneDashboardPageWidgetLogTableColorsToTerraform(struct?: OneDashboardPageWidgetLogTableColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    series_overrides: cdktf.listMapper(oneDashboardPageWidgetLogTableColorsSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
  }
}


export function oneDashboardPageWidgetLogTableColorsToHclTerraform(struct?: OneDashboardPageWidgetLogTableColors | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oneDashboardPageWidgetLogTableColorsSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "OneDashboardPageWidgetLogTableColorsSeriesOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneDashboardPageWidgetLogTableColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTableColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLogTableColors | cdktf.IResolvable | undefined) {
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
  private _seriesOverrides = new OneDashboardPageWidgetLogTableColorsSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: OneDashboardPageWidgetLogTableColorsSeriesOverrides[] | cdktf.IResolvable) {
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

export class OneDashboardPageWidgetLogTableColorsList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTableColors[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableColorsOutputReference {
    return new OneDashboardPageWidgetLogTableColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLogTableDataFormat {
  /**
  * Defines the format of the mentioned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#format OneDashboard#format}
  */
  readonly format?: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * The precision of the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#precision OneDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Defines the type of the mentioned column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#type OneDashboard#type}
  */
  readonly type: string;
}

export function oneDashboardPageWidgetLogTableDataFormatToTerraform(struct?: OneDashboardPageWidgetLogTableDataFormat | cdktf.IResolvable): any {
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


export function oneDashboardPageWidgetLogTableDataFormatToHclTerraform(struct?: OneDashboardPageWidgetLogTableDataFormat | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLogTableDataFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTableDataFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLogTableDataFormat | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLogTableDataFormatList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTableDataFormat[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableDataFormatOutputReference {
    return new OneDashboardPageWidgetLogTableDataFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLogTableInitialSorting {
  /**
  * Defines the sort order. Either ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#direction OneDashboard#direction}
  */
  readonly direction: string;
  /**
  * The column name to be sorted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#name OneDashboard#name}
  */
  readonly name: string;
}

export function oneDashboardPageWidgetLogTableInitialSortingToTerraform(struct?: OneDashboardPageWidgetLogTableInitialSortingOutputReference | OneDashboardPageWidgetLogTableInitialSorting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oneDashboardPageWidgetLogTableInitialSortingToHclTerraform(struct?: OneDashboardPageWidgetLogTableInitialSortingOutputReference | OneDashboardPageWidgetLogTableInitialSorting): any {
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

export class OneDashboardPageWidgetLogTableInitialSortingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneDashboardPageWidgetLogTableInitialSorting | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLogTableInitialSorting | undefined) {
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
export interface OneDashboardPageWidgetLogTableNrqlQuery {
  /**
  * The account ID(s) used for the NRQL query. Can be a single account ID or multiple account IDs in a JSON-encoded array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#account_id OneDashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * The NRQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetLogTableNrqlQueryToTerraform(struct?: OneDashboardPageWidgetLogTableNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function oneDashboardPageWidgetLogTableNrqlQueryToHclTerraform(struct?: OneDashboardPageWidgetLogTableNrqlQuery | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLogTableNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTableNrqlQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLogTableNrqlQuery | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLogTableNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTableNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableNrqlQueryOutputReference {
    return new OneDashboardPageWidgetLogTableNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneDashboardPageWidgetLogTableNullValuesSeriesOverrides {
  /**
  * Null value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#null_value OneDashboard#null_value}
  */
  readonly nullValue?: string;
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/one_dashboard#series_name OneDashboard#series_name}
  */
  readonly seriesName?: string;
}

export function oneDashboardPageWidgetLogTableNullValuesSeriesOverridesToTerraform(struct?: OneDashboardPageWidgetLogTableNullValuesSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value: cdktf.stringToTerraform(struct!.nullValue),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
  }
}


export function oneDashboardPageWidgetLogTableNullValuesSeriesOverridesToHclTerraform(struct?: OneDashboardPageWidgetLogTableNullValuesSeriesOverrides | cdktf.IResolvable): any {
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

export class OneDashboardPageWidgetLogTableNullValuesSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneDashboardPageWidgetLogTableNullValuesSeriesOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OneDashboardPageWidgetLogTableNullValuesSeriesOverrides | cdktf.IResolvable | undefined) {
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

export class OneDashboardPageWidgetLogTableNullValuesSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : OneDashboardPageWidgetLogTableNullValuesSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): OneDashboardPageWidgetLogTableNullValuesSeriesOverridesOutputReference {
    return new OneDashboardPageWidgetLogTableNullValuesSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
