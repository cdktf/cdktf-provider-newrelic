// https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OneDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to create the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The dashboard's description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#description OneDashboard#description}
  */
  readonly description?: string;
  /**
  * The dashboard's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#permissions OneDashboard#permissions}
  */
  readonly permissions?: string;
  /**
  * page block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#page OneDashboard#page}
  */
  readonly page: OneDashboardPage[];
}
export interface OneDashboardPageWidgetAreaNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetAreaNrqlQueryToTerraform(struct?: OneDashboardPageWidgetAreaNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetArea {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetAreaNrqlQuery[];
}

export function oneDashboardPageWidgetAreaToTerraform(struct?: OneDashboardPageWidgetArea): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetAreaNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetBarNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBarNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBarNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetBar {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Use this item to filter the current dashboard
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBarNrqlQuery[];
}

export function oneDashboardPageWidgetBarToTerraform(struct?: OneDashboardPageWidgetBar): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    filter_current_dashboard: cdktf.booleanToTerraform(struct!.filterCurrentDashboard),
    height: cdktf.numberToTerraform(struct!.height),
    linked_entity_guids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.linkedEntityGuids),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetBarNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetBillboardNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBillboardNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBillboardNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetBillboard {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * The critical threshold value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#critical OneDashboard#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * The warning threshold value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#warning OneDashboard#warning}
  */
  readonly warning?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBillboardNrqlQuery[];
}

export function oneDashboardPageWidgetBillboardToTerraform(struct?: OneDashboardPageWidgetBillboard): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    critical: cdktf.numberToTerraform(struct!.critical),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    warning: cdktf.numberToTerraform(struct!.warning),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetBillboardNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetBulletNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetBulletNrqlQueryToTerraform(struct?: OneDashboardPageWidgetBulletNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetBullet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * The maximum value for the visualization
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#limit OneDashboard#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetBulletNrqlQuery[];
}

export function oneDashboardPageWidgetBulletToTerraform(struct?: OneDashboardPageWidgetBullet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    limit: cdktf.numberToTerraform(struct!.limit),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetBulletNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetFunnelNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetFunnelNrqlQueryToTerraform(struct?: OneDashboardPageWidgetFunnelNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetFunnel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetFunnelNrqlQuery[];
}

export function oneDashboardPageWidgetFunnelToTerraform(struct?: OneDashboardPageWidgetFunnel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetFunnelNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetHeatmapNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetHeatmapNrqlQueryToTerraform(struct?: OneDashboardPageWidgetHeatmapNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetHeatmap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetHeatmapNrqlQuery[];
}

export function oneDashboardPageWidgetHeatmapToTerraform(struct?: OneDashboardPageWidgetHeatmap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetHeatmapNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetHistogramNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetHistogramNrqlQueryToTerraform(struct?: OneDashboardPageWidgetHistogramNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetHistogram {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetHistogramNrqlQuery[];
}

export function oneDashboardPageWidgetHistogramToTerraform(struct?: OneDashboardPageWidgetHistogram): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetHistogramNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetJsonNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetJsonNrqlQueryToTerraform(struct?: OneDashboardPageWidgetJsonNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetJson {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetJsonNrqlQuery[];
}

export function oneDashboardPageWidgetJsonToTerraform(struct?: OneDashboardPageWidgetJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetJsonNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetLineNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetLineNrqlQueryToTerraform(struct?: OneDashboardPageWidgetLineNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetLine {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetLineNrqlQuery[];
}

export function oneDashboardPageWidgetLineToTerraform(struct?: OneDashboardPageWidgetLine): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetLineNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetMarkdown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#text OneDashboard#text}
  */
  readonly text?: string;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
}

export function oneDashboardPageWidgetMarkdownToTerraform(struct?: OneDashboardPageWidgetMarkdown): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    text: cdktf.stringToTerraform(struct!.text),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
  }
}

export interface OneDashboardPageWidgetPieNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetPieNrqlQueryToTerraform(struct?: OneDashboardPageWidgetPieNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetPie {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Use this item to filter the current dashboard
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetPieNrqlQuery[];
}

export function oneDashboardPageWidgetPieToTerraform(struct?: OneDashboardPageWidgetPie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    filter_current_dashboard: cdktf.booleanToTerraform(struct!.filterCurrentDashboard),
    height: cdktf.numberToTerraform(struct!.height),
    linked_entity_guids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.linkedEntityGuids),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetPieNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetStackedBarNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetStackedBarNrqlQueryToTerraform(struct?: OneDashboardPageWidgetStackedBarNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetStackedBar {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetStackedBarNrqlQuery[];
}

export function oneDashboardPageWidgetStackedBarToTerraform(struct?: OneDashboardPageWidgetStackedBar): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetStackedBarNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPageWidgetTableNrqlQuery {
  /**
  * The account id used for the NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#account_id OneDashboard#account_id}
  */
  readonly accountId?: number;
  /**
  * The NRQL query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#query OneDashboard#query}
  */
  readonly query: string;
}

export function oneDashboardPageWidgetTableNrqlQueryToTerraform(struct?: OneDashboardPageWidgetTableNrqlQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface OneDashboardPageWidgetTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#column OneDashboard#column}
  */
  readonly column: number;
  /**
  * Use this item to filter the current dashboard
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#filter_current_dashboard OneDashboard#filter_current_dashboard}
  */
  readonly filterCurrentDashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#height OneDashboard#height}
  */
  readonly height?: number;
  /**
  * Related entities. Currently only supports Dashboard entities, but may allow other cases in the future.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#linked_entity_guids OneDashboard#linked_entity_guids}
  */
  readonly linkedEntityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#row OneDashboard#row}
  */
  readonly row: number;
  /**
  * A title for the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#title OneDashboard#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#width OneDashboard#width}
  */
  readonly width?: number;
  /**
  * nrql_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#nrql_query OneDashboard#nrql_query}
  */
  readonly nrqlQuery: OneDashboardPageWidgetTableNrqlQuery[];
}

export function oneDashboardPageWidgetTableToTerraform(struct?: OneDashboardPageWidgetTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    filter_current_dashboard: cdktf.booleanToTerraform(struct!.filterCurrentDashboard),
    height: cdktf.numberToTerraform(struct!.height),
    linked_entity_guids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.linkedEntityGuids),
    row: cdktf.numberToTerraform(struct!.row),
    title: cdktf.stringToTerraform(struct!.title),
    width: cdktf.numberToTerraform(struct!.width),
    nrql_query: cdktf.listMapper(oneDashboardPageWidgetTableNrqlQueryToTerraform)(struct!.nrqlQuery),
  }
}

export interface OneDashboardPage {
  /**
  * The dashboard page's description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#description OneDashboard#description}
  */
  readonly description?: string;
  /**
  * The dashboard page's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#name OneDashboard#name}
  */
  readonly name: string;
  /**
  * widget_area block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_area OneDashboard#widget_area}
  */
  readonly widgetArea?: OneDashboardPageWidgetArea[];
  /**
  * widget_bar block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_bar OneDashboard#widget_bar}
  */
  readonly widgetBar?: OneDashboardPageWidgetBar[];
  /**
  * widget_billboard block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_billboard OneDashboard#widget_billboard}
  */
  readonly widgetBillboard?: OneDashboardPageWidgetBillboard[];
  /**
  * widget_bullet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_bullet OneDashboard#widget_bullet}
  */
  readonly widgetBullet?: OneDashboardPageWidgetBullet[];
  /**
  * widget_funnel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_funnel OneDashboard#widget_funnel}
  */
  readonly widgetFunnel?: OneDashboardPageWidgetFunnel[];
  /**
  * widget_heatmap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_heatmap OneDashboard#widget_heatmap}
  */
  readonly widgetHeatmap?: OneDashboardPageWidgetHeatmap[];
  /**
  * widget_histogram block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_histogram OneDashboard#widget_histogram}
  */
  readonly widgetHistogram?: OneDashboardPageWidgetHistogram[];
  /**
  * widget_json block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_json OneDashboard#widget_json}
  */
  readonly widgetJson?: OneDashboardPageWidgetJson[];
  /**
  * widget_line block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_line OneDashboard#widget_line}
  */
  readonly widgetLine?: OneDashboardPageWidgetLine[];
  /**
  * widget_markdown block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_markdown OneDashboard#widget_markdown}
  */
  readonly widgetMarkdown?: OneDashboardPageWidgetMarkdown[];
  /**
  * widget_pie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_pie OneDashboard#widget_pie}
  */
  readonly widgetPie?: OneDashboardPageWidgetPie[];
  /**
  * widget_stacked_bar block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_stacked_bar OneDashboard#widget_stacked_bar}
  */
  readonly widgetStackedBar?: OneDashboardPageWidgetStackedBar[];
  /**
  * widget_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html#widget_table OneDashboard#widget_table}
  */
  readonly widgetTable?: OneDashboardPageWidgetTable[];
}

export function oneDashboardPageToTerraform(struct?: OneDashboardPage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    widget_area: cdktf.listMapper(oneDashboardPageWidgetAreaToTerraform)(struct!.widgetArea),
    widget_bar: cdktf.listMapper(oneDashboardPageWidgetBarToTerraform)(struct!.widgetBar),
    widget_billboard: cdktf.listMapper(oneDashboardPageWidgetBillboardToTerraform)(struct!.widgetBillboard),
    widget_bullet: cdktf.listMapper(oneDashboardPageWidgetBulletToTerraform)(struct!.widgetBullet),
    widget_funnel: cdktf.listMapper(oneDashboardPageWidgetFunnelToTerraform)(struct!.widgetFunnel),
    widget_heatmap: cdktf.listMapper(oneDashboardPageWidgetHeatmapToTerraform)(struct!.widgetHeatmap),
    widget_histogram: cdktf.listMapper(oneDashboardPageWidgetHistogramToTerraform)(struct!.widgetHistogram),
    widget_json: cdktf.listMapper(oneDashboardPageWidgetJsonToTerraform)(struct!.widgetJson),
    widget_line: cdktf.listMapper(oneDashboardPageWidgetLineToTerraform)(struct!.widgetLine),
    widget_markdown: cdktf.listMapper(oneDashboardPageWidgetMarkdownToTerraform)(struct!.widgetMarkdown),
    widget_pie: cdktf.listMapper(oneDashboardPageWidgetPieToTerraform)(struct!.widgetPie),
    widget_stacked_bar: cdktf.listMapper(oneDashboardPageWidgetStackedBarToTerraform)(struct!.widgetStackedBar),
    widget_table: cdktf.listMapper(oneDashboardPageWidgetTableToTerraform)(struct!.widgetTable),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html newrelic_one_dashboard}
*/
export class OneDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_one_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/one_dashboard.html newrelic_one_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OneDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: OneDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_one_dashboard',
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
  private _page?: OneDashboardPage[]; 
  public get page() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('page') as any;
  }
  public set page(value: OneDashboardPage[]) {
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
      page: cdktf.listMapper(oneDashboardPageToTerraform)(this._page),
    };
  }
}
