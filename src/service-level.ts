// https://www.terraform.io/docs/providers/newrelic/r/service_level.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#description ServiceLevel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#guid ServiceLevel#guid}
  */
  readonly guid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#name ServiceLevel#name}
  */
  readonly name: string;
  /**
  * events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#events ServiceLevel#events}
  */
  readonly events: ServiceLevelEvents;
  /**
  * objective block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#objective ServiceLevel#objective}
  */
  readonly objective?: ServiceLevelObjective[];
}
export interface ServiceLevelEventsBadEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#from ServiceLevel#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#where ServiceLevel#where}
  */
  readonly where?: string;
}

export function serviceLevelEventsBadEventsToTerraform(struct?: ServiceLevelEventsBadEventsOutputReference | ServiceLevelEventsBadEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    where: cdktf.stringToTerraform(struct!.where),
  }
}

export class ServiceLevelEventsBadEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceLevelEventsBadEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsBadEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._where = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._where = value.where;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface ServiceLevelEventsGoodEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#from ServiceLevel#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#where ServiceLevel#where}
  */
  readonly where?: string;
}

export function serviceLevelEventsGoodEventsToTerraform(struct?: ServiceLevelEventsGoodEventsOutputReference | ServiceLevelEventsGoodEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    where: cdktf.stringToTerraform(struct!.where),
  }
}

export class ServiceLevelEventsGoodEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceLevelEventsGoodEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsGoodEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._where = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._where = value.where;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface ServiceLevelEventsValidEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#from ServiceLevel#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#where ServiceLevel#where}
  */
  readonly where?: string;
}

export function serviceLevelEventsValidEventsToTerraform(struct?: ServiceLevelEventsValidEventsOutputReference | ServiceLevelEventsValidEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    where: cdktf.stringToTerraform(struct!.where),
  }
}

export class ServiceLevelEventsValidEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceLevelEventsValidEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsValidEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._where = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._where = value.where;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface ServiceLevelEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#account_id ServiceLevel#account_id}
  */
  readonly accountId: number;
  /**
  * bad_events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#bad_events ServiceLevel#bad_events}
  */
  readonly badEvents?: ServiceLevelEventsBadEvents;
  /**
  * good_events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#good_events ServiceLevel#good_events}
  */
  readonly goodEvents?: ServiceLevelEventsGoodEvents;
  /**
  * valid_events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#valid_events ServiceLevel#valid_events}
  */
  readonly validEvents: ServiceLevelEventsValidEvents;
}

export function serviceLevelEventsToTerraform(struct?: ServiceLevelEventsOutputReference | ServiceLevelEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.numberToTerraform(struct!.accountId),
    bad_events: serviceLevelEventsBadEventsToTerraform(struct!.badEvents),
    good_events: serviceLevelEventsGoodEventsToTerraform(struct!.goodEvents),
    valid_events: serviceLevelEventsValidEventsToTerraform(struct!.validEvents),
  }
}

export class ServiceLevelEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceLevelEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._badEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEvents = this._badEvents?.internalValue;
    }
    if (this._goodEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodEvents = this._goodEvents?.internalValue;
    }
    if (this._validEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validEvents = this._validEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._badEvents.internalValue = undefined;
      this._goodEvents.internalValue = undefined;
      this._validEvents.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._badEvents.internalValue = value.badEvents;
      this._goodEvents.internalValue = value.goodEvents;
      this._validEvents.internalValue = value.validEvents;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // bad_events - computed: false, optional: true, required: false
  private _badEvents = new ServiceLevelEventsBadEventsOutputReference(this as any, "bad_events", true);
  public get badEvents() {
    return this._badEvents;
  }
  public putBadEvents(value: ServiceLevelEventsBadEvents) {
    this._badEvents.internalValue = value;
  }
  public resetBadEvents() {
    this._badEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEventsInput() {
    return this._badEvents.internalValue;
  }

  // good_events - computed: false, optional: true, required: false
  private _goodEvents = new ServiceLevelEventsGoodEventsOutputReference(this as any, "good_events", true);
  public get goodEvents() {
    return this._goodEvents;
  }
  public putGoodEvents(value: ServiceLevelEventsGoodEvents) {
    this._goodEvents.internalValue = value;
  }
  public resetGoodEvents() {
    this._goodEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodEventsInput() {
    return this._goodEvents.internalValue;
  }

  // valid_events - computed: false, optional: false, required: true
  private _validEvents = new ServiceLevelEventsValidEventsOutputReference(this as any, "valid_events", true);
  public get validEvents() {
    return this._validEvents;
  }
  public putValidEvents(value: ServiceLevelEventsValidEvents) {
    this._validEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validEventsInput() {
    return this._validEvents.internalValue;
  }
}
export interface ServiceLevelObjectiveTimeWindowRolling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#count ServiceLevel#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#unit ServiceLevel#unit}
  */
  readonly unit: string;
}

export function serviceLevelObjectiveTimeWindowRollingToTerraform(struct?: ServiceLevelObjectiveTimeWindowRollingOutputReference | ServiceLevelObjectiveTimeWindowRolling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export class ServiceLevelObjectiveTimeWindowRollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceLevelObjectiveTimeWindowRolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveTimeWindowRolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._unit = value.unit;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ServiceLevelObjectiveTimeWindow {
  /**
  * rolling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#rolling ServiceLevel#rolling}
  */
  readonly rolling: ServiceLevelObjectiveTimeWindowRolling;
}

export function serviceLevelObjectiveTimeWindowToTerraform(struct?: ServiceLevelObjectiveTimeWindowOutputReference | ServiceLevelObjectiveTimeWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling: serviceLevelObjectiveTimeWindowRollingToTerraform(struct!.rolling),
  }
}

export class ServiceLevelObjectiveTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceLevelObjectiveTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rolling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolling = this._rolling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjectiveTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rolling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rolling.internalValue = value.rolling;
    }
  }

  // rolling - computed: false, optional: false, required: true
  private _rolling = new ServiceLevelObjectiveTimeWindowRollingOutputReference(this as any, "rolling", true);
  public get rolling() {
    return this._rolling;
  }
  public putRolling(value: ServiceLevelObjectiveTimeWindowRolling) {
    this._rolling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingInput() {
    return this._rolling.internalValue;
  }
}
export interface ServiceLevelObjective {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#description ServiceLevel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#name ServiceLevel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#target ServiceLevel#target}
  */
  readonly target: number;
  /**
  * time_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html#time_window ServiceLevel#time_window}
  */
  readonly timeWindow: ServiceLevelObjectiveTimeWindow;
}

export function serviceLevelObjectiveToTerraform(struct?: ServiceLevelObjective): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.numberToTerraform(struct!.target),
    time_window: serviceLevelObjectiveTimeWindowToTerraform(struct!.timeWindow),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html newrelic_service_level}
*/
export class ServiceLevel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_service_level";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/service_level.html newrelic_service_level} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLevelConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_service_level',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._guid = config.guid;
    this._name = config.name;
    this._events.internalValue = config.events;
    this._objective = config.objective;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // guid - computed: false, optional: false, required: true
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

  // sli_id - computed: true, optional: false, required: false
  public get sliId() {
    return this.getStringAttribute('sli_id');
  }

  // events - computed: false, optional: false, required: true
  private _events = new ServiceLevelEventsOutputReference(this as any, "events", true);
  public get events() {
    return this._events;
  }
  public putEvents(value: ServiceLevelEvents) {
    this._events.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // objective - computed: false, optional: true, required: false
  private _objective?: ServiceLevelObjective[]; 
  public get objective() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('objective') as any;
  }
  public set objective(value: ServiceLevelObjective[]) {
    this._objective = value;
  }
  public resetObjective() {
    this._objective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      guid: cdktf.stringToTerraform(this._guid),
      name: cdktf.stringToTerraform(this._name),
      events: serviceLevelEventsToTerraform(this._events.internalValue),
      objective: cdktf.listMapper(serviceLevelObjectiveToTerraform)(this._objective),
    };
  }
}
