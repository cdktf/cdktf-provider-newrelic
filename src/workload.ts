// https://www.terraform.io/docs/providers/newrelic/r/workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to create the workload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#account_id Workload#account_id}
  */
  readonly accountId?: number;
  /**
  * A list of entity GUIDs manually assigned to this workload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#entity_guids Workload#entity_guids}
  */
  readonly entityGuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#id Workload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The workload's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#name Workload#name}
  */
  readonly name: string;
  /**
  * A list of account IDs that will be used to get entities from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#scope_account_ids Workload#scope_account_ids}
  */
  readonly scopeAccountIds?: number[];
  /**
  * entity_search_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#entity_search_query Workload#entity_search_query}
  */
  readonly entitySearchQuery?: WorkloadEntitySearchQuery[] | cdktf.IResolvable;
}
export interface WorkloadEntitySearchQuery {
  /**
  * The query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/workload#query Workload#query}
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/workload newrelic_workload}
*/
export class Workload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_workload";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/workload newrelic_workload} Resource
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
        providerVersion: '2.46.1',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._entityGuids = config.entityGuids;
    this._id = config.id;
    this._name = config.name;
    this._scopeAccountIds = config.scopeAccountIds;
    this._entitySearchQuery.internalValue = config.entitySearchQuery;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      entity_guids: cdktf.listMapper(cdktf.stringToTerraform)(this._entityGuids),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope_account_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._scopeAccountIds),
      entity_search_query: cdktf.listMapper(workloadEntitySearchQueryToTerraform)(this._entitySearchQuery.internalValue),
    };
  }
}
