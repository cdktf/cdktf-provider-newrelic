// https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id of the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#account_id Workflow#account_id}
  */
  readonly accountId?: number;
  /**
  * Indicates whether the destinations are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#destinations_enabled Workflow#destinations_enabled}
  */
  readonly destinationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the workflow is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#enabled Workflow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the enrichments are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#enrichments_enabled Workflow#enrichments_enabled}
  */
  readonly enrichmentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#id Workflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#muting_rules_handling Workflow#muting_rules_handling}
  */
  readonly mutingRulesHandling: string;
  /**
  * (Required) The name of the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#name Workflow#name}
  */
  readonly name: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#destination Workflow#destination}
  */
  readonly destination: WorkflowDestination[] | cdktf.IResolvable;
  /**
  * enrichments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#enrichments Workflow#enrichments}
  */
  readonly enrichments?: WorkflowEnrichments;
  /**
  * issues_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#issues_filter Workflow#issues_filter}
  */
  readonly issuesFilter: WorkflowIssuesFilter;
}
export interface WorkflowDestination {
  /**
  * (Required) Destination's channel id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#channel_id Workflow#channel_id}
  */
  readonly channelId: string;
  /**
  * List of triggers to notify about in this destination configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#notification_triggers Workflow#notification_triggers}
  */
  readonly notificationTriggers?: string[];
  /**
  * Update original notification message (Slack channels only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#update_original_message Workflow#update_original_message}
  */
  readonly updateOriginalMessage?: boolean | cdktf.IResolvable;
}

export function workflowDestinationToTerraform(struct?: WorkflowDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    notification_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationTriggers),
    update_original_message: cdktf.booleanToTerraform(struct!.updateOriginalMessage),
  }
}


export function workflowDestinationToHclTerraform(struct?: WorkflowDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_triggers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationTriggers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    update_original_message: {
      value: cdktf.booleanToHclTerraform(struct!.updateOriginalMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._notificationTriggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTriggers = this._notificationTriggers;
    }
    if (this._updateOriginalMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateOriginalMessage = this._updateOriginalMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
      this._notificationTriggers = undefined;
      this._updateOriginalMessage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
      this._notificationTriggers = value.notificationTriggers;
      this._updateOriginalMessage = value.updateOriginalMessage;
    }
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_triggers - computed: true, optional: true, required: false
  private _notificationTriggers?: string[]; 
  public get notificationTriggers() {
    return this.getListAttribute('notification_triggers');
  }
  public set notificationTriggers(value: string[]) {
    this._notificationTriggers = value;
  }
  public resetNotificationTriggers() {
    this._notificationTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTriggersInput() {
    return this._notificationTriggers;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_original_message - computed: true, optional: true, required: false
  private _updateOriginalMessage?: boolean | cdktf.IResolvable; 
  public get updateOriginalMessage() {
    return this.getBooleanAttribute('update_original_message');
  }
  public set updateOriginalMessage(value: boolean | cdktf.IResolvable) {
    this._updateOriginalMessage = value;
  }
  public resetUpdateOriginalMessage() {
    this._updateOriginalMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOriginalMessageInput() {
    return this._updateOriginalMessage;
  }
}

export class WorkflowDestinationList extends cdktf.ComplexList {
  public internalValue? : WorkflowDestination[] | cdktf.IResolvable

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
  public get(index: number): WorkflowDestinationOutputReference {
    return new WorkflowDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowEnrichmentsNrqlConfiguration {
  /**
  * enrichment's NRQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#query Workflow#query}
  */
  readonly query: string;
}

export function workflowEnrichmentsNrqlConfigurationToTerraform(struct?: WorkflowEnrichmentsNrqlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function workflowEnrichmentsNrqlConfigurationToHclTerraform(struct?: WorkflowEnrichmentsNrqlConfiguration | cdktf.IResolvable): any {
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

export class WorkflowEnrichmentsNrqlConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowEnrichmentsNrqlConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowEnrichmentsNrqlConfiguration | cdktf.IResolvable | undefined) {
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

export class WorkflowEnrichmentsNrqlConfigurationList extends cdktf.ComplexList {
  public internalValue? : WorkflowEnrichmentsNrqlConfiguration[] | cdktf.IResolvable

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
  public get(index: number): WorkflowEnrichmentsNrqlConfigurationOutputReference {
    return new WorkflowEnrichmentsNrqlConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowEnrichmentsNrql {
  /**
  * (Required) Enrichment's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#name Workflow#name}
  */
  readonly name: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#configuration Workflow#configuration}
  */
  readonly configuration: WorkflowEnrichmentsNrqlConfiguration[] | cdktf.IResolvable;
}

export function workflowEnrichmentsNrqlToTerraform(struct?: WorkflowEnrichmentsNrql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    configuration: cdktf.listMapper(workflowEnrichmentsNrqlConfigurationToTerraform, true)(struct!.configuration),
  }
}


export function workflowEnrichmentsNrqlToHclTerraform(struct?: WorkflowEnrichmentsNrql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(workflowEnrichmentsNrqlConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowEnrichmentsNrqlConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowEnrichmentsNrqlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowEnrichmentsNrql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowEnrichmentsNrql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._configuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._configuration.internalValue = value.configuration;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // enrichment_id - computed: true, optional: false, required: false
  public get enrichmentId() {
    return this.getStringAttribute('enrichment_id');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new WorkflowEnrichmentsNrqlConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: WorkflowEnrichmentsNrqlConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}

export class WorkflowEnrichmentsNrqlList extends cdktf.ComplexList {
  public internalValue? : WorkflowEnrichmentsNrql[] | cdktf.IResolvable

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
  public get(index: number): WorkflowEnrichmentsNrqlOutputReference {
    return new WorkflowEnrichmentsNrqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowEnrichments {
  /**
  * nrql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#nrql Workflow#nrql}
  */
  readonly nrql: WorkflowEnrichmentsNrql[] | cdktf.IResolvable;
}

export function workflowEnrichmentsToTerraform(struct?: WorkflowEnrichmentsOutputReference | WorkflowEnrichments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nrql: cdktf.listMapper(workflowEnrichmentsNrqlToTerraform, true)(struct!.nrql),
  }
}


export function workflowEnrichmentsToHclTerraform(struct?: WorkflowEnrichmentsOutputReference | WorkflowEnrichments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nrql: {
      value: cdktf.listMapperHcl(workflowEnrichmentsNrqlToHclTerraform, true)(struct!.nrql),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowEnrichmentsNrqlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowEnrichmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowEnrichments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nrql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrql = this._nrql?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowEnrichments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nrql.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nrql.internalValue = value.nrql;
    }
  }

  // nrql - computed: false, optional: false, required: true
  private _nrql = new WorkflowEnrichmentsNrqlList(this, "nrql", false);
  public get nrql() {
    return this._nrql;
  }
  public putNrql(value: WorkflowEnrichmentsNrql[] | cdktf.IResolvable) {
    this._nrql.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql.internalValue;
  }
}
export interface WorkflowIssuesFilterPredicate {
  /**
  * (Required) predicate's attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#attribute Workflow#attribute}
  */
  readonly attribute: string;
  /**
  * The type of the operator. One of: (CONTAINS, DOES_NOT_CONTAIN, DOES_NOT_EQUAL, DOES_NOT_EXACTLY_MATCH, ENDS_WITH, EQUAL, EXACTLY_MATCHES, GREATER_OR_EQUAL, GREATER_THAN, IS, IS_NOT, LESS_OR_EQUAL, LESS_THAN, STARTS_WITH).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#operator Workflow#operator}
  */
  readonly operator: string;
  /**
  * List of predicate values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#values Workflow#values}
  */
  readonly values: string[];
}

export function workflowIssuesFilterPredicateToTerraform(struct?: WorkflowIssuesFilterPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function workflowIssuesFilterPredicateToHclTerraform(struct?: WorkflowIssuesFilterPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowIssuesFilterPredicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowIssuesFilterPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowIssuesFilterPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class WorkflowIssuesFilterPredicateList extends cdktf.ComplexList {
  public internalValue? : WorkflowIssuesFilterPredicate[] | cdktf.IResolvable

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
  public get(index: number): WorkflowIssuesFilterPredicateOutputReference {
    return new WorkflowIssuesFilterPredicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowIssuesFilter {
  /**
  * (Required) Filter's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#name Workflow#name}
  */
  readonly name: string;
  /**
  * (Required) The type of the filter. One of: (FILTER, VIEW).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#type Workflow#type}
  */
  readonly type: string;
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#predicate Workflow#predicate}
  */
  readonly predicate?: WorkflowIssuesFilterPredicate[] | cdktf.IResolvable;
}

export function workflowIssuesFilterToTerraform(struct?: WorkflowIssuesFilterOutputReference | WorkflowIssuesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    predicate: cdktf.listMapper(workflowIssuesFilterPredicateToTerraform, true)(struct!.predicate),
  }
}


export function workflowIssuesFilterToHclTerraform(struct?: WorkflowIssuesFilterOutputReference | WorkflowIssuesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    predicate: {
      value: cdktf.listMapperHcl(workflowIssuesFilterPredicateToHclTerraform, true)(struct!.predicate),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowIssuesFilterPredicateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowIssuesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowIssuesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowIssuesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
      this._predicate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._type = value.type;
      this._predicate.internalValue = value.predicate;
    }
  }

  // filter_id - computed: true, optional: false, required: false
  public get filterId() {
    return this.getStringAttribute('filter_id');
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

  // predicate - computed: false, optional: true, required: false
  private _predicate = new WorkflowIssuesFilterPredicateList(this, "predicate", false);
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: WorkflowIssuesFilterPredicate[] | cdktf.IResolvable) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow newrelic_workflow}
*/
export class Workflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workflow to import
  * @param importFromId The id of the existing Workflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/workflow newrelic_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_workflow',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.54.0',
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
    this._destinationsEnabled = config.destinationsEnabled;
    this._enabled = config.enabled;
    this._enrichmentsEnabled = config.enrichmentsEnabled;
    this._id = config.id;
    this._mutingRulesHandling = config.mutingRulesHandling;
    this._name = config.name;
    this._destination.internalValue = config.destination;
    this._enrichments.internalValue = config.enrichments;
    this._issuesFilter.internalValue = config.issuesFilter;
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

  // destinations_enabled - computed: false, optional: true, required: false
  private _destinationsEnabled?: boolean | cdktf.IResolvable; 
  public get destinationsEnabled() {
    return this.getBooleanAttribute('destinations_enabled');
  }
  public set destinationsEnabled(value: boolean | cdktf.IResolvable) {
    this._destinationsEnabled = value;
  }
  public resetDestinationsEnabled() {
    this._destinationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsEnabledInput() {
    return this._destinationsEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enrichments_enabled - computed: false, optional: true, required: false
  private _enrichmentsEnabled?: boolean | cdktf.IResolvable; 
  public get enrichmentsEnabled() {
    return this.getBooleanAttribute('enrichments_enabled');
  }
  public set enrichmentsEnabled(value: boolean | cdktf.IResolvable) {
    this._enrichmentsEnabled = value;
  }
  public resetEnrichmentsEnabled() {
    this._enrichmentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentsEnabledInput() {
    return this._enrichmentsEnabled;
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

  // last_run - computed: true, optional: false, required: false
  public get lastRun() {
    return this.getStringAttribute('last_run');
  }

  // muting_rules_handling - computed: false, optional: false, required: true
  private _mutingRulesHandling?: string; 
  public get mutingRulesHandling() {
    return this.getStringAttribute('muting_rules_handling');
  }
  public set mutingRulesHandling(value: string) {
    this._mutingRulesHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mutingRulesHandlingInput() {
    return this._mutingRulesHandling;
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

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new WorkflowDestinationList(this, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: WorkflowDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // enrichments - computed: false, optional: true, required: false
  private _enrichments = new WorkflowEnrichmentsOutputReference(this, "enrichments");
  public get enrichments() {
    return this._enrichments;
  }
  public putEnrichments(value: WorkflowEnrichments) {
    this._enrichments.internalValue = value;
  }
  public resetEnrichments() {
    this._enrichments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentsInput() {
    return this._enrichments.internalValue;
  }

  // issues_filter - computed: false, optional: false, required: true
  private _issuesFilter = new WorkflowIssuesFilterOutputReference(this, "issues_filter");
  public get issuesFilter() {
    return this._issuesFilter;
  }
  public putIssuesFilter(value: WorkflowIssuesFilter) {
    this._issuesFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesFilterInput() {
    return this._issuesFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      destinations_enabled: cdktf.booleanToTerraform(this._destinationsEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enrichments_enabled: cdktf.booleanToTerraform(this._enrichmentsEnabled),
      id: cdktf.stringToTerraform(this._id),
      muting_rules_handling: cdktf.stringToTerraform(this._mutingRulesHandling),
      name: cdktf.stringToTerraform(this._name),
      destination: cdktf.listMapper(workflowDestinationToTerraform, true)(this._destination.internalValue),
      enrichments: workflowEnrichmentsToTerraform(this._enrichments.internalValue),
      issues_filter: workflowIssuesFilterToTerraform(this._issuesFilter.internalValue),
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
      destinations_enabled: {
        value: cdktf.booleanToHclTerraform(this._destinationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enrichments_enabled: {
        value: cdktf.booleanToHclTerraform(this._enrichmentsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      muting_rules_handling: {
        value: cdktf.stringToHclTerraform(this._mutingRulesHandling),
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
      destination: {
        value: cdktf.listMapperHcl(workflowDestinationToHclTerraform, true)(this._destination.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkflowDestinationList",
      },
      enrichments: {
        value: workflowEnrichmentsToHclTerraform(this._enrichments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkflowEnrichmentsList",
      },
      issues_filter: {
        value: workflowIssuesFilterToHclTerraform(this._issuesFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkflowIssuesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
