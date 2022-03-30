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
        providerVersion: '2.41.2',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._entityGuids = config.entityGuids;
    this._name = config.name;
    this._scopeAccountIds = config.scopeAccountIds;
    this._entitySearchQuery = config.entitySearchQuery;
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
  private _entitySearchQuery?: WorkloadEntitySearchQuery[] | cdktf.IResolvable; 
  public get entitySearchQuery() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('entity_search_query')));
  }
  public set entitySearchQuery(value: WorkloadEntitySearchQuery[] | cdktf.IResolvable) {
    this._entitySearchQuery = value;
  }
  public resetEntitySearchQuery() {
    this._entitySearchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySearchQueryInput() {
    return this._entitySearchQuery;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      entity_guids: cdktf.listMapper(cdktf.stringToTerraform)(this._entityGuids),
      name: cdktf.stringToTerraform(this._name),
      scope_account_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._scopeAccountIds),
      entity_search_query: cdktf.listMapper(workloadEntitySearchQueryToTerraform)(this._entitySearchQuery),
    };
  }
}
