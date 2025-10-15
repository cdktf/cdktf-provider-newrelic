/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to create the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#account_id Workload#account_id}
  */
  readonly accountId?: number;
  /**
  * Relevant information about the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#description Workload#description}
  */
  readonly description?: string;
  /**
  * A list of entity GUIDs manually assigned to this workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#entity_guids Workload#entity_guids}
  */
  readonly entityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#id Workload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The workload's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#name Workload#name}
  */
  readonly name: string;
  /**
  * A list of account IDs that will be used to get entities from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#scope_account_ids Workload#scope_account_ids}
  */
  readonly scopeAccountIds?: number[];
  /**
  * entity_search_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#entity_search_query Workload#entity_search_query}
  */
  readonly entitySearchQuery?: WorkloadEntitySearchQuery[] | cdktf.IResolvable;
  /**
  * status_config_automatic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#status_config_automatic Workload#status_config_automatic}
  */
  readonly statusConfigAutomatic?: WorkloadStatusConfigAutomatic;
  /**
  * status_config_static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#status_config_static Workload#status_config_static}
  */
  readonly statusConfigStatic?: WorkloadStatusConfigStatic;
}
export interface WorkloadEntitySearchQuery {
  /**
  * A valid entity search query; empty, and null values are considered invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#query Workload#query}
  */
  readonly query: string;
}

export function workloadEntitySearchQueryToTerraform(struct?: WorkloadEntitySearchQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function workloadEntitySearchQueryToHclTerraform(struct?: WorkloadEntitySearchQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class WorkloadEntitySearchQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadEntitySearchQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadEntitySearchQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
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

export class WorkloadEntitySearchQueryList extends cdktf.ComplexList {
  public internalValue? : WorkloadEntitySearchQuery[] | cdktf.IResolvable

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
  public get(index: number): WorkloadEntitySearchQueryOutputReference {
    return new WorkloadEntitySearchQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup {
  /**
  * The grouping to be applied to the remaining entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#group_by Workload#group_by}
  */
  readonly groupBy: string;
  /**
  * The rollup strategy that is applied to a group of entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#strategy Workload#strategy}
  */
  readonly strategy: string;
  /**
  * Type of threshold defined for the rule. This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#threshold_type Workload#threshold_type}
  */
  readonly thresholdType?: string;
  /**
  * Threshold value defined for the rule. This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#threshold_value Workload#threshold_value}
  */
  readonly thresholdValue?: number;
}

export function workloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupToTerraform(struct?: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference | WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by: cdktf.stringToTerraform(struct!.groupBy),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
  }
}


export function workloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupToHclTerraform(struct?: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference | WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by: {
      value: cdktf.stringToHclTerraform(struct!.groupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.thresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupBy = undefined;
      this._strategy = undefined;
      this._thresholdType = undefined;
      this._thresholdValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupBy = value.groupBy;
      this._strategy = value.strategy;
      this._thresholdType = value.thresholdType;
      this._thresholdValue = value.thresholdValue;
    }
  }

  // group_by - computed: false, optional: false, required: true
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }
}
export interface WorkloadStatusConfigAutomaticRemainingEntitiesRule {
  /**
  * remaining_entities_rule_rollup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#remaining_entities_rule_rollup Workload#remaining_entities_rule_rollup}
  */
  readonly remainingEntitiesRuleRollup: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup;
}

export function workloadStatusConfigAutomaticRemainingEntitiesRuleToTerraform(struct?: WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference | WorkloadStatusConfigAutomaticRemainingEntitiesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remaining_entities_rule_rollup: workloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupToTerraform(struct!.remainingEntitiesRuleRollup),
  }
}


export function workloadStatusConfigAutomaticRemainingEntitiesRuleToHclTerraform(struct?: WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference | WorkloadStatusConfigAutomaticRemainingEntitiesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remaining_entities_rule_rollup: {
      value: workloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupToHclTerraform(struct!.remainingEntitiesRuleRollup),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadStatusConfigAutomaticRemainingEntitiesRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remainingEntitiesRuleRollup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainingEntitiesRuleRollup = this._remainingEntitiesRuleRollup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusConfigAutomaticRemainingEntitiesRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._remainingEntitiesRuleRollup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._remainingEntitiesRuleRollup.internalValue = value.remainingEntitiesRuleRollup;
    }
  }

  // remaining_entities_rule_rollup - computed: false, optional: false, required: true
  private _remainingEntitiesRuleRollup = new WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference(this, "remaining_entities_rule_rollup");
  public get remainingEntitiesRuleRollup() {
    return this._remainingEntitiesRuleRollup;
  }
  public putRemainingEntitiesRuleRollup(value: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup) {
    this._remainingEntitiesRuleRollup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingEntitiesRuleRollupInput() {
    return this._remainingEntitiesRuleRollup.internalValue;
  }
}
export interface WorkloadStatusConfigAutomaticRuleNrqlQuery {
  /**
  * The entity search query that is used to perform the search of a group of entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#query Workload#query}
  */
  readonly query: string;
}

export function workloadStatusConfigAutomaticRuleNrqlQueryToTerraform(struct?: WorkloadStatusConfigAutomaticRuleNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function workloadStatusConfigAutomaticRuleNrqlQueryToHclTerraform(struct?: WorkloadStatusConfigAutomaticRuleNrqlQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadStatusConfigAutomaticRuleNrqlQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusConfigAutomaticRuleNrqlQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
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

export class WorkloadStatusConfigAutomaticRuleNrqlQueryList extends cdktf.ComplexList {
  public internalValue? : WorkloadStatusConfigAutomaticRuleNrqlQuery[] | cdktf.IResolvable

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
  public get(index: number): WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference {
    return new WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadStatusConfigAutomaticRuleRollup {
  /**
  * The rollup strategy that is applied to a group of entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#strategy Workload#strategy}
  */
  readonly strategy: string;
  /**
  * Type of threshold defined for the rule. This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#threshold_type Workload#threshold_type}
  */
  readonly thresholdType?: string;
  /**
  * Threshold value defined for the rule. This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#threshold_value Workload#threshold_value}
  */
  readonly thresholdValue?: number;
}

export function workloadStatusConfigAutomaticRuleRollupToTerraform(struct?: WorkloadStatusConfigAutomaticRuleRollupOutputReference | WorkloadStatusConfigAutomaticRuleRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
  }
}


export function workloadStatusConfigAutomaticRuleRollupToHclTerraform(struct?: WorkloadStatusConfigAutomaticRuleRollupOutputReference | WorkloadStatusConfigAutomaticRuleRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.thresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadStatusConfigAutomaticRuleRollupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadStatusConfigAutomaticRuleRollup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusConfigAutomaticRuleRollup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategy = undefined;
      this._thresholdType = undefined;
      this._thresholdValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategy = value.strategy;
      this._thresholdType = value.thresholdType;
      this._thresholdValue = value.thresholdValue;
    }
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }
}
export interface WorkloadStatusConfigAutomaticRule {
  /**
  * A list of entity GUIDs composing the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#entity_guids Workload#entity_guids}
  */
  readonly entityGuids?: string[];
  /**
  * nrql_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#nrql_query Workload#nrql_query}
  */
  readonly nrqlQuery?: WorkloadStatusConfigAutomaticRuleNrqlQuery[] | cdktf.IResolvable;
  /**
  * rollup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#rollup Workload#rollup}
  */
  readonly rollup: WorkloadStatusConfigAutomaticRuleRollup;
}

export function workloadStatusConfigAutomaticRuleToTerraform(struct?: WorkloadStatusConfigAutomaticRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_guids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityGuids),
    nrql_query: cdktf.listMapper(workloadStatusConfigAutomaticRuleNrqlQueryToTerraform, true)(struct!.nrqlQuery),
    rollup: workloadStatusConfigAutomaticRuleRollupToTerraform(struct!.rollup),
  }
}


export function workloadStatusConfigAutomaticRuleToHclTerraform(struct?: WorkloadStatusConfigAutomaticRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_guids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityGuids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    nrql_query: {
      value: cdktf.listMapperHcl(workloadStatusConfigAutomaticRuleNrqlQueryToHclTerraform, true)(struct!.nrqlQuery),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadStatusConfigAutomaticRuleNrqlQueryList",
    },
    rollup: {
      value: workloadStatusConfigAutomaticRuleRollupToHclTerraform(struct!.rollup),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadStatusConfigAutomaticRuleRollupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadStatusConfigAutomaticRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadStatusConfigAutomaticRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityGuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityGuids = this._entityGuids;
    }
    if (this._nrqlQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrqlQuery = this._nrqlQuery?.internalValue;
    }
    if (this._rollup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollup = this._rollup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusConfigAutomaticRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityGuids = undefined;
      this._nrqlQuery.internalValue = undefined;
      this._rollup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityGuids = value.entityGuids;
      this._nrqlQuery.internalValue = value.nrqlQuery;
      this._rollup.internalValue = value.rollup;
    }
  }

  // entity_guids - computed: true, optional: true, required: false
  private _entityGuids?: string[]; 
  public get entityGuids() {
    return cdktf.Fn.tolist(this.getListAttribute('entity_guids'));
  }
  public set entityGuids(value: string[]) {
    this._entityGuids = value;
  }
  public resetEntityGuids() {
    this._entityGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityGuidsInput() {
    return this._entityGuids;
  }

  // nrql_query - computed: false, optional: true, required: false
  private _nrqlQuery = new WorkloadStatusConfigAutomaticRuleNrqlQueryList(this, "nrql_query", true);
  public get nrqlQuery() {
    return this._nrqlQuery;
  }
  public putNrqlQuery(value: WorkloadStatusConfigAutomaticRuleNrqlQuery[] | cdktf.IResolvable) {
    this._nrqlQuery.internalValue = value;
  }
  public resetNrqlQuery() {
    this._nrqlQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlQueryInput() {
    return this._nrqlQuery.internalValue;
  }

  // rollup - computed: false, optional: false, required: true
  private _rollup = new WorkloadStatusConfigAutomaticRuleRollupOutputReference(this, "rollup");
  public get rollup() {
    return this._rollup;
  }
  public putRollup(value: WorkloadStatusConfigAutomaticRuleRollup) {
    this._rollup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupInput() {
    return this._rollup.internalValue;
  }
}

export class WorkloadStatusConfigAutomaticRuleList extends cdktf.ComplexList {
  public internalValue? : WorkloadStatusConfigAutomaticRule[] | cdktf.IResolvable

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
  public get(index: number): WorkloadStatusConfigAutomaticRuleOutputReference {
    return new WorkloadStatusConfigAutomaticRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadStatusConfigAutomatic {
  /**
  * Whether the automatic status configuration is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#enabled Workload#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * remaining_entities_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#remaining_entities_rule Workload#remaining_entities_rule}
  */
  readonly remainingEntitiesRule?: WorkloadStatusConfigAutomaticRemainingEntitiesRule;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#rule Workload#rule}
  */
  readonly rule?: WorkloadStatusConfigAutomaticRule[] | cdktf.IResolvable;
}

export function workloadStatusConfigAutomaticToTerraform(struct?: WorkloadStatusConfigAutomaticOutputReference | WorkloadStatusConfigAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    remaining_entities_rule: workloadStatusConfigAutomaticRemainingEntitiesRuleToTerraform(struct!.remainingEntitiesRule),
    rule: cdktf.listMapper(workloadStatusConfigAutomaticRuleToTerraform, true)(struct!.rule),
  }
}


export function workloadStatusConfigAutomaticToHclTerraform(struct?: WorkloadStatusConfigAutomaticOutputReference | WorkloadStatusConfigAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remaining_entities_rule: {
      value: workloadStatusConfigAutomaticRemainingEntitiesRuleToHclTerraform(struct!.remainingEntitiesRule),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadStatusConfigAutomaticRemainingEntitiesRuleList",
    },
    rule: {
      value: cdktf.listMapperHcl(workloadStatusConfigAutomaticRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadStatusConfigAutomaticRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadStatusConfigAutomaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadStatusConfigAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._remainingEntitiesRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainingEntitiesRule = this._remainingEntitiesRule?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusConfigAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._remainingEntitiesRule.internalValue = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._remainingEntitiesRule.internalValue = value.remainingEntitiesRule;
      this._rule.internalValue = value.rule;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // remaining_entities_rule - computed: false, optional: true, required: false
  private _remainingEntitiesRule = new WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference(this, "remaining_entities_rule");
  public get remainingEntitiesRule() {
    return this._remainingEntitiesRule;
  }
  public putRemainingEntitiesRule(value: WorkloadStatusConfigAutomaticRemainingEntitiesRule) {
    this._remainingEntitiesRule.internalValue = value;
  }
  public resetRemainingEntitiesRule() {
    this._remainingEntitiesRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingEntitiesRuleInput() {
    return this._remainingEntitiesRule.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new WorkloadStatusConfigAutomaticRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: WorkloadStatusConfigAutomaticRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface WorkloadStatusConfigStatic {
  /**
  * A description that provides additional details about the status of the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#description Workload#description}
  */
  readonly description?: string;
  /**
  * Whether the static status configuration is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#enabled Workload#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The status of the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#status Workload#status}
  */
  readonly status: string;
  /**
  * A short description of the status of the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#summary Workload#summary}
  */
  readonly summary?: string;
}

export function workloadStatusConfigStaticToTerraform(struct?: WorkloadStatusConfigStaticOutputReference | WorkloadStatusConfigStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    status: cdktf.stringToTerraform(struct!.status),
    summary: cdktf.stringToTerraform(struct!.summary),
  }
}


export function workloadStatusConfigStaticToHclTerraform(struct?: WorkloadStatusConfigStaticOutputReference | WorkloadStatusConfigStatic): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadStatusConfigStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadStatusConfigStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusConfigStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._status = undefined;
      this._summary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._status = value.status;
      this._summary = value.summary;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload newrelic_workload}
*/
export class Workload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workload to import
  * @param importFromId The id of the existing Workload that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.0/docs/resources/workload newrelic_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: WorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_workload',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.72.0',
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
    this._entityGuids = config.entityGuids;
    this._id = config.id;
    this._name = config.name;
    this._scopeAccountIds = config.scopeAccountIds;
    this._entitySearchQuery.internalValue = config.entitySearchQuery;
    this._statusConfigAutomatic.internalValue = config.statusConfigAutomatic;
    this._statusConfigStatic.internalValue = config.statusConfigStatic;
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

  // composite_entity_search_query - computed: true, optional: false, required: false
  public get compositeEntitySearchQuery() {
    return this.getStringAttribute('composite_entity_search_query');
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

  // entity_guids - computed: true, optional: true, required: false
  private _entityGuids?: string[]; 
  public get entityGuids() {
    return cdktf.Fn.tolist(this.getListAttribute('entity_guids'));
  }
  public set entityGuids(value: string[]) {
    this._entityGuids = value;
  }
  public resetEntityGuids() {
    this._entityGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityGuidsInput() {
    return this._entityGuids;
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

  // scope_account_ids - computed: true, optional: true, required: false
  private _scopeAccountIds?: number[]; 
  public get scopeAccountIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('scope_account_ids')));
  }
  public set scopeAccountIds(value: number[]) {
    this._scopeAccountIds = value;
  }
  public resetScopeAccountIds() {
    this._scopeAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeAccountIdsInput() {
    return this._scopeAccountIds;
  }

  // workload_id - computed: true, optional: false, required: false
  public get workloadId() {
    return this.getNumberAttribute('workload_id');
  }

  // entity_search_query - computed: false, optional: true, required: false
  private _entitySearchQuery = new WorkloadEntitySearchQueryList(this, "entity_search_query", true);
  public get entitySearchQuery() {
    return this._entitySearchQuery;
  }
  public putEntitySearchQuery(value: WorkloadEntitySearchQuery[] | cdktf.IResolvable) {
    this._entitySearchQuery.internalValue = value;
  }
  public resetEntitySearchQuery() {
    this._entitySearchQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySearchQueryInput() {
    return this._entitySearchQuery.internalValue;
  }

  // status_config_automatic - computed: false, optional: true, required: false
  private _statusConfigAutomatic = new WorkloadStatusConfigAutomaticOutputReference(this, "status_config_automatic");
  public get statusConfigAutomatic() {
    return this._statusConfigAutomatic;
  }
  public putStatusConfigAutomatic(value: WorkloadStatusConfigAutomatic) {
    this._statusConfigAutomatic.internalValue = value;
  }
  public resetStatusConfigAutomatic() {
    this._statusConfigAutomatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusConfigAutomaticInput() {
    return this._statusConfigAutomatic.internalValue;
  }

  // status_config_static - computed: false, optional: true, required: false
  private _statusConfigStatic = new WorkloadStatusConfigStaticOutputReference(this, "status_config_static");
  public get statusConfigStatic() {
    return this._statusConfigStatic;
  }
  public putStatusConfigStatic(value: WorkloadStatusConfigStatic) {
    this._statusConfigStatic.internalValue = value;
  }
  public resetStatusConfigStatic() {
    this._statusConfigStatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusConfigStaticInput() {
    return this._statusConfigStatic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      entity_guids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entityGuids),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope_account_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._scopeAccountIds),
      entity_search_query: cdktf.listMapper(workloadEntitySearchQueryToTerraform, true)(this._entitySearchQuery.internalValue),
      status_config_automatic: workloadStatusConfigAutomaticToTerraform(this._statusConfigAutomatic.internalValue),
      status_config_static: workloadStatusConfigStaticToTerraform(this._statusConfigStatic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_guids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entityGuids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      scope_account_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._scopeAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      entity_search_query: {
        value: cdktf.listMapperHcl(workloadEntitySearchQueryToHclTerraform, true)(this._entitySearchQuery.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkloadEntitySearchQueryList",
      },
      status_config_automatic: {
        value: workloadStatusConfigAutomaticToHclTerraform(this._statusConfigAutomatic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkloadStatusConfigAutomaticList",
      },
      status_config_static: {
        value: workloadStatusConfigStaticToHclTerraform(this._statusConfigStatic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkloadStatusConfigStaticList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
