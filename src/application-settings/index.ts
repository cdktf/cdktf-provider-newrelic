/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The response time threshold value for Apdex score calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}
  */
  readonly appApdexThreshold?: number;
  /**
  * Dummy field to support backward compatibility of previous version.should be removed with next major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}
  */
  readonly enableRealUserMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Samples and reports the slowest database queries in your traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#enable_slow_sql ApplicationSettings#enable_slow_sql}
  */
  readonly enableSlowSql?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the thread profiler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#enable_thread_profiler ApplicationSettings#enable_thread_profiler}
  */
  readonly enableThreadProfiler?: boolean | cdktf.IResolvable;
  /**
  * Dummy field to support backward compatibility of previous version.should be removed with next major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}
  */
  readonly endUserApdexThreshold?: number;
  /**
  * The GUID of the application in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#guid ApplicationSettings#guid}
  */
  readonly guid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#id ApplicationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the application in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#name ApplicationSettings#name}
  */
  readonly name?: string;
  /**
  * The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#tracer_type ApplicationSettings#tracer_type}
  */
  readonly tracerType?: string;
  /**
  * Enable or disable server side monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#use_server_side_config ApplicationSettings#use_server_side_config}
  */
  readonly useServerSideConfig?: boolean | cdktf.IResolvable;
  /**
  * error_collector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#error_collector ApplicationSettings#error_collector}
  */
  readonly errorCollector?: ApplicationSettingsErrorCollector[] | cdktf.IResolvable;
  /**
  * transaction_tracer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#transaction_tracer ApplicationSettings#transaction_tracer}
  */
  readonly transactionTracer?: ApplicationSettingsTransactionTracer[] | cdktf.IResolvable;
}
export interface ApplicationSettingsErrorCollector {
  /**
  * A list of error classes that are expected and should not trigger alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#expected_error_classes ApplicationSettings#expected_error_classes}
  */
  readonly expectedErrorClasses?: string[];
  /**
  * A list of error codes that are expected and should not trigger alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#expected_error_codes ApplicationSettings#expected_error_codes}
  */
  readonly expectedErrorCodes?: string[];
  /**
  * A list of error classes that should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#ignored_error_classes ApplicationSettings#ignored_error_classes}
  */
  readonly ignoredErrorClasses?: string[];
  /**
  * A list of error codes that should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#ignored_error_codes ApplicationSettings#ignored_error_codes}
  */
  readonly ignoredErrorCodes?: string[];
}

export function applicationSettingsErrorCollectorToTerraform(struct?: ApplicationSettingsErrorCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_error_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expectedErrorClasses),
    expected_error_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expectedErrorCodes),
    ignored_error_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredErrorClasses),
    ignored_error_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredErrorCodes),
  }
}


export function applicationSettingsErrorCollectorToHclTerraform(struct?: ApplicationSettingsErrorCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_error_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expectedErrorClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expected_error_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expectedErrorCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignored_error_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredErrorClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignored_error_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredErrorCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSettingsErrorCollectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSettingsErrorCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedErrorClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedErrorClasses = this._expectedErrorClasses;
    }
    if (this._expectedErrorCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedErrorCodes = this._expectedErrorCodes;
    }
    if (this._ignoredErrorClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredErrorClasses = this._ignoredErrorClasses;
    }
    if (this._ignoredErrorCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredErrorCodes = this._ignoredErrorCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSettingsErrorCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedErrorClasses = undefined;
      this._expectedErrorCodes = undefined;
      this._ignoredErrorClasses = undefined;
      this._ignoredErrorCodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedErrorClasses = value.expectedErrorClasses;
      this._expectedErrorCodes = value.expectedErrorCodes;
      this._ignoredErrorClasses = value.ignoredErrorClasses;
      this._ignoredErrorCodes = value.ignoredErrorCodes;
    }
  }

  // expected_error_classes - computed: false, optional: true, required: false
  private _expectedErrorClasses?: string[]; 
  public get expectedErrorClasses() {
    return this.getListAttribute('expected_error_classes');
  }
  public set expectedErrorClasses(value: string[]) {
    this._expectedErrorClasses = value;
  }
  public resetExpectedErrorClasses() {
    this._expectedErrorClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedErrorClassesInput() {
    return this._expectedErrorClasses;
  }

  // expected_error_codes - computed: false, optional: true, required: false
  private _expectedErrorCodes?: string[]; 
  public get expectedErrorCodes() {
    return this.getListAttribute('expected_error_codes');
  }
  public set expectedErrorCodes(value: string[]) {
    this._expectedErrorCodes = value;
  }
  public resetExpectedErrorCodes() {
    this._expectedErrorCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedErrorCodesInput() {
    return this._expectedErrorCodes;
  }

  // ignored_error_classes - computed: false, optional: true, required: false
  private _ignoredErrorClasses?: string[]; 
  public get ignoredErrorClasses() {
    return this.getListAttribute('ignored_error_classes');
  }
  public set ignoredErrorClasses(value: string[]) {
    this._ignoredErrorClasses = value;
  }
  public resetIgnoredErrorClasses() {
    this._ignoredErrorClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredErrorClassesInput() {
    return this._ignoredErrorClasses;
  }

  // ignored_error_codes - computed: false, optional: true, required: false
  private _ignoredErrorCodes?: string[]; 
  public get ignoredErrorCodes() {
    return this.getListAttribute('ignored_error_codes');
  }
  public set ignoredErrorCodes(value: string[]) {
    this._ignoredErrorCodes = value;
  }
  public resetIgnoredErrorCodes() {
    this._ignoredErrorCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredErrorCodesInput() {
    return this._ignoredErrorCodes;
  }
}

export class ApplicationSettingsErrorCollectorList extends cdktf.ComplexList {
  public internalValue? : ApplicationSettingsErrorCollector[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSettingsErrorCollectorOutputReference {
    return new ApplicationSettingsErrorCollectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSettingsTransactionTracerExplainQueryPlans {
  /**
  * The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#query_plan_threshold_type ApplicationSettings#query_plan_threshold_type}
  */
  readonly queryPlanThresholdType?: string;
  /**
  * The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#query_plan_threshold_value ApplicationSettings#query_plan_threshold_value}
  */
  readonly queryPlanThresholdValue?: number;
}

export function applicationSettingsTransactionTracerExplainQueryPlansToTerraform(struct?: ApplicationSettingsTransactionTracerExplainQueryPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_plan_threshold_type: cdktf.stringToTerraform(struct!.queryPlanThresholdType),
    query_plan_threshold_value: cdktf.numberToTerraform(struct!.queryPlanThresholdValue),
  }
}


export function applicationSettingsTransactionTracerExplainQueryPlansToHclTerraform(struct?: ApplicationSettingsTransactionTracerExplainQueryPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_plan_threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.queryPlanThresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_plan_threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.queryPlanThresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSettingsTransactionTracerExplainQueryPlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryPlanThresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPlanThresholdType = this._queryPlanThresholdType;
    }
    if (this._queryPlanThresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPlanThresholdValue = this._queryPlanThresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSettingsTransactionTracerExplainQueryPlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryPlanThresholdType = undefined;
      this._queryPlanThresholdValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryPlanThresholdType = value.queryPlanThresholdType;
      this._queryPlanThresholdValue = value.queryPlanThresholdValue;
    }
  }

  // query_plan_threshold_type - computed: false, optional: true, required: false
  private _queryPlanThresholdType?: string; 
  public get queryPlanThresholdType() {
    return this.getStringAttribute('query_plan_threshold_type');
  }
  public set queryPlanThresholdType(value: string) {
    this._queryPlanThresholdType = value;
  }
  public resetQueryPlanThresholdType() {
    this._queryPlanThresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPlanThresholdTypeInput() {
    return this._queryPlanThresholdType;
  }

  // query_plan_threshold_value - computed: false, optional: true, required: false
  private _queryPlanThresholdValue?: number; 
  public get queryPlanThresholdValue() {
    return this.getNumberAttribute('query_plan_threshold_value');
  }
  public set queryPlanThresholdValue(value: number) {
    this._queryPlanThresholdValue = value;
  }
  public resetQueryPlanThresholdValue() {
    this._queryPlanThresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPlanThresholdValueInput() {
    return this._queryPlanThresholdValue;
  }
}

export class ApplicationSettingsTransactionTracerExplainQueryPlansList extends cdktf.ComplexList {
  public internalValue? : ApplicationSettingsTransactionTracerExplainQueryPlans[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference {
    return new ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSettingsTransactionTracerSql {
  /**
  * The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#record_sql ApplicationSettings#record_sql}
  */
  readonly recordSql: string;
}

export function applicationSettingsTransactionTracerSqlToTerraform(struct?: ApplicationSettingsTransactionTracerSqlOutputReference | ApplicationSettingsTransactionTracerSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_sql: cdktf.stringToTerraform(struct!.recordSql),
  }
}


export function applicationSettingsTransactionTracerSqlToHclTerraform(struct?: ApplicationSettingsTransactionTracerSqlOutputReference | ApplicationSettingsTransactionTracerSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_sql: {
      value: cdktf.stringToHclTerraform(struct!.recordSql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSettingsTransactionTracerSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSettingsTransactionTracerSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSql = this._recordSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSettingsTransactionTracerSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordSql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordSql = value.recordSql;
    }
  }

  // record_sql - computed: false, optional: false, required: true
  private _recordSql?: string; 
  public get recordSql() {
    return this.getStringAttribute('record_sql');
  }
  public set recordSql(value: string) {
    this._recordSql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSqlInput() {
    return this._recordSql;
  }
}
export interface ApplicationSettingsTransactionTracer {
  /**
  * The response time threshold value for capturing stack traces of SQL queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#stack_trace_threshold_value ApplicationSettings#stack_trace_threshold_value}
  */
  readonly stackTraceThresholdValue?: number;
  /**
  * The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#transaction_threshold_type ApplicationSettings#transaction_threshold_type}
  */
  readonly transactionThresholdType?: string;
  /**
  * The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#transaction_threshold_value ApplicationSettings#transaction_threshold_value}
  */
  readonly transactionThresholdValue?: number;
  /**
  * explain_query_plans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#explain_query_plans ApplicationSettings#explain_query_plans}
  */
  readonly explainQueryPlans?: ApplicationSettingsTransactionTracerExplainQueryPlans[] | cdktf.IResolvable;
  /**
  * sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#sql ApplicationSettings#sql}
  */
  readonly sql?: ApplicationSettingsTransactionTracerSql;
}

export function applicationSettingsTransactionTracerToTerraform(struct?: ApplicationSettingsTransactionTracer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stack_trace_threshold_value: cdktf.numberToTerraform(struct!.stackTraceThresholdValue),
    transaction_threshold_type: cdktf.stringToTerraform(struct!.transactionThresholdType),
    transaction_threshold_value: cdktf.numberToTerraform(struct!.transactionThresholdValue),
    explain_query_plans: cdktf.listMapper(applicationSettingsTransactionTracerExplainQueryPlansToTerraform, true)(struct!.explainQueryPlans),
    sql: applicationSettingsTransactionTracerSqlToTerraform(struct!.sql),
  }
}


export function applicationSettingsTransactionTracerToHclTerraform(struct?: ApplicationSettingsTransactionTracer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stack_trace_threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.stackTraceThresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.transactionThresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.transactionThresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    explain_query_plans: {
      value: cdktf.listMapperHcl(applicationSettingsTransactionTracerExplainQueryPlansToHclTerraform, true)(struct!.explainQueryPlans),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSettingsTransactionTracerExplainQueryPlansList",
    },
    sql: {
      value: applicationSettingsTransactionTracerSqlToHclTerraform(struct!.sql),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSettingsTransactionTracerSqlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSettingsTransactionTracerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSettingsTransactionTracer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stackTraceThresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackTraceThresholdValue = this._stackTraceThresholdValue;
    }
    if (this._transactionThresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionThresholdType = this._transactionThresholdType;
    }
    if (this._transactionThresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionThresholdValue = this._transactionThresholdValue;
    }
    if (this._explainQueryPlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explainQueryPlans = this._explainQueryPlans?.internalValue;
    }
    if (this._sql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSettingsTransactionTracer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stackTraceThresholdValue = undefined;
      this._transactionThresholdType = undefined;
      this._transactionThresholdValue = undefined;
      this._explainQueryPlans.internalValue = undefined;
      this._sql.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stackTraceThresholdValue = value.stackTraceThresholdValue;
      this._transactionThresholdType = value.transactionThresholdType;
      this._transactionThresholdValue = value.transactionThresholdValue;
      this._explainQueryPlans.internalValue = value.explainQueryPlans;
      this._sql.internalValue = value.sql;
    }
  }

  // stack_trace_threshold_value - computed: false, optional: true, required: false
  private _stackTraceThresholdValue?: number; 
  public get stackTraceThresholdValue() {
    return this.getNumberAttribute('stack_trace_threshold_value');
  }
  public set stackTraceThresholdValue(value: number) {
    this._stackTraceThresholdValue = value;
  }
  public resetStackTraceThresholdValue() {
    this._stackTraceThresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTraceThresholdValueInput() {
    return this._stackTraceThresholdValue;
  }

  // transaction_threshold_type - computed: false, optional: true, required: false
  private _transactionThresholdType?: string; 
  public get transactionThresholdType() {
    return this.getStringAttribute('transaction_threshold_type');
  }
  public set transactionThresholdType(value: string) {
    this._transactionThresholdType = value;
  }
  public resetTransactionThresholdType() {
    this._transactionThresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionThresholdTypeInput() {
    return this._transactionThresholdType;
  }

  // transaction_threshold_value - computed: false, optional: true, required: false
  private _transactionThresholdValue?: number; 
  public get transactionThresholdValue() {
    return this.getNumberAttribute('transaction_threshold_value');
  }
  public set transactionThresholdValue(value: number) {
    this._transactionThresholdValue = value;
  }
  public resetTransactionThresholdValue() {
    this._transactionThresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionThresholdValueInput() {
    return this._transactionThresholdValue;
  }

  // explain_query_plans - computed: false, optional: true, required: false
  private _explainQueryPlans = new ApplicationSettingsTransactionTracerExplainQueryPlansList(this, "explain_query_plans", false);
  public get explainQueryPlans() {
    return this._explainQueryPlans;
  }
  public putExplainQueryPlans(value: ApplicationSettingsTransactionTracerExplainQueryPlans[] | cdktf.IResolvable) {
    this._explainQueryPlans.internalValue = value;
  }
  public resetExplainQueryPlans() {
    this._explainQueryPlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainQueryPlansInput() {
    return this._explainQueryPlans.internalValue;
  }

  // sql - computed: false, optional: true, required: false
  private _sql = new ApplicationSettingsTransactionTracerSqlOutputReference(this, "sql");
  public get sql() {
    return this._sql;
  }
  public putSql(value: ApplicationSettingsTransactionTracerSql) {
    this._sql.internalValue = value;
  }
  public resetSql() {
    this._sql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql.internalValue;
  }
}

export class ApplicationSettingsTransactionTracerList extends cdktf.ComplexList {
  public internalValue? : ApplicationSettingsTransactionTracer[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSettingsTransactionTracerOutputReference {
    return new ApplicationSettingsTransactionTracerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings newrelic_application_settings}
*/
export class ApplicationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_application_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSettings to import
  * @param importFromId The id of the existing ApplicationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_application_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/application_settings newrelic_application_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'newrelic_application_settings',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.67.0',
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
    this._appApdexThreshold = config.appApdexThreshold;
    this._enableRealUserMonitoring = config.enableRealUserMonitoring;
    this._enableSlowSql = config.enableSlowSql;
    this._enableThreadProfiler = config.enableThreadProfiler;
    this._endUserApdexThreshold = config.endUserApdexThreshold;
    this._guid = config.guid;
    this._id = config.id;
    this._name = config.name;
    this._tracerType = config.tracerType;
    this._useServerSideConfig = config.useServerSideConfig;
    this._errorCollector.internalValue = config.errorCollector;
    this._transactionTracer.internalValue = config.transactionTracer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_apdex_threshold - computed: false, optional: true, required: false
  private _appApdexThreshold?: number; 
  public get appApdexThreshold() {
    return this.getNumberAttribute('app_apdex_threshold');
  }
  public set appApdexThreshold(value: number) {
    this._appApdexThreshold = value;
  }
  public resetAppApdexThreshold() {
    this._appApdexThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appApdexThresholdInput() {
    return this._appApdexThreshold;
  }

  // enable_real_user_monitoring - computed: false, optional: true, required: false
  private _enableRealUserMonitoring?: boolean | cdktf.IResolvable; 
  public get enableRealUserMonitoring() {
    return this.getBooleanAttribute('enable_real_user_monitoring');
  }
  public set enableRealUserMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableRealUserMonitoring = value;
  }
  public resetEnableRealUserMonitoring() {
    this._enableRealUserMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRealUserMonitoringInput() {
    return this._enableRealUserMonitoring;
  }

  // enable_slow_sql - computed: false, optional: true, required: false
  private _enableSlowSql?: boolean | cdktf.IResolvable; 
  public get enableSlowSql() {
    return this.getBooleanAttribute('enable_slow_sql');
  }
  public set enableSlowSql(value: boolean | cdktf.IResolvable) {
    this._enableSlowSql = value;
  }
  public resetEnableSlowSql() {
    this._enableSlowSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSlowSqlInput() {
    return this._enableSlowSql;
  }

  // enable_thread_profiler - computed: false, optional: true, required: false
  private _enableThreadProfiler?: boolean | cdktf.IResolvable; 
  public get enableThreadProfiler() {
    return this.getBooleanAttribute('enable_thread_profiler');
  }
  public set enableThreadProfiler(value: boolean | cdktf.IResolvable) {
    this._enableThreadProfiler = value;
  }
  public resetEnableThreadProfiler() {
    this._enableThreadProfiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThreadProfilerInput() {
    return this._enableThreadProfiler;
  }

  // end_user_apdex_threshold - computed: false, optional: true, required: false
  private _endUserApdexThreshold?: number; 
  public get endUserApdexThreshold() {
    return this.getNumberAttribute('end_user_apdex_threshold');
  }
  public set endUserApdexThreshold(value: number) {
    this._endUserApdexThreshold = value;
  }
  public resetEndUserApdexThreshold() {
    this._endUserApdexThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserApdexThresholdInput() {
    return this._endUserApdexThreshold;
  }

  // guid - computed: true, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

  // is_imported - computed: true, optional: false, required: false
  public get isImported() {
    return this.getBooleanAttribute('is_imported');
  }

  // name - computed: true, optional: true, required: false
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

  // tracer_type - computed: false, optional: true, required: false
  private _tracerType?: string; 
  public get tracerType() {
    return this.getStringAttribute('tracer_type');
  }
  public set tracerType(value: string) {
    this._tracerType = value;
  }
  public resetTracerType() {
    this._tracerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracerTypeInput() {
    return this._tracerType;
  }

  // use_server_side_config - computed: false, optional: true, required: false
  private _useServerSideConfig?: boolean | cdktf.IResolvable; 
  public get useServerSideConfig() {
    return this.getBooleanAttribute('use_server_side_config');
  }
  public set useServerSideConfig(value: boolean | cdktf.IResolvable) {
    this._useServerSideConfig = value;
  }
  public resetUseServerSideConfig() {
    this._useServerSideConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerSideConfigInput() {
    return this._useServerSideConfig;
  }

  // error_collector - computed: false, optional: true, required: false
  private _errorCollector = new ApplicationSettingsErrorCollectorList(this, "error_collector", false);
  public get errorCollector() {
    return this._errorCollector;
  }
  public putErrorCollector(value: ApplicationSettingsErrorCollector[] | cdktf.IResolvable) {
    this._errorCollector.internalValue = value;
  }
  public resetErrorCollector() {
    this._errorCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCollectorInput() {
    return this._errorCollector.internalValue;
  }

  // transaction_tracer - computed: false, optional: true, required: false
  private _transactionTracer = new ApplicationSettingsTransactionTracerList(this, "transaction_tracer", false);
  public get transactionTracer() {
    return this._transactionTracer;
  }
  public putTransactionTracer(value: ApplicationSettingsTransactionTracer[] | cdktf.IResolvable) {
    this._transactionTracer.internalValue = value;
  }
  public resetTransactionTracer() {
    this._transactionTracer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionTracerInput() {
    return this._transactionTracer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_apdex_threshold: cdktf.numberToTerraform(this._appApdexThreshold),
      enable_real_user_monitoring: cdktf.booleanToTerraform(this._enableRealUserMonitoring),
      enable_slow_sql: cdktf.booleanToTerraform(this._enableSlowSql),
      enable_thread_profiler: cdktf.booleanToTerraform(this._enableThreadProfiler),
      end_user_apdex_threshold: cdktf.numberToTerraform(this._endUserApdexThreshold),
      guid: cdktf.stringToTerraform(this._guid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tracer_type: cdktf.stringToTerraform(this._tracerType),
      use_server_side_config: cdktf.booleanToTerraform(this._useServerSideConfig),
      error_collector: cdktf.listMapper(applicationSettingsErrorCollectorToTerraform, true)(this._errorCollector.internalValue),
      transaction_tracer: cdktf.listMapper(applicationSettingsTransactionTracerToTerraform, true)(this._transactionTracer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_apdex_threshold: {
        value: cdktf.numberToHclTerraform(this._appApdexThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_real_user_monitoring: {
        value: cdktf.booleanToHclTerraform(this._enableRealUserMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_slow_sql: {
        value: cdktf.booleanToHclTerraform(this._enableSlowSql),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_thread_profiler: {
        value: cdktf.booleanToHclTerraform(this._enableThreadProfiler),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_user_apdex_threshold: {
        value: cdktf.numberToHclTerraform(this._endUserApdexThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guid: {
        value: cdktf.stringToHclTerraform(this._guid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      tracer_type: {
        value: cdktf.stringToHclTerraform(this._tracerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_server_side_config: {
        value: cdktf.booleanToHclTerraform(this._useServerSideConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_collector: {
        value: cdktf.listMapperHcl(applicationSettingsErrorCollectorToHclTerraform, true)(this._errorCollector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSettingsErrorCollectorList",
      },
      transaction_tracer: {
        value: cdktf.listMapperHcl(applicationSettingsTransactionTracerToHclTerraform, true)(this._transactionTracer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSettingsTransactionTracerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
