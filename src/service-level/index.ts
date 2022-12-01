// https://www.terraform.io/docs/providers/newrelic/r/service_level
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#description ServiceLevel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#guid ServiceLevel#guid}
  */
  readonly guid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#id ServiceLevel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#name ServiceLevel#name}
  */
  readonly name: string;
  /**
  * events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#events ServiceLevel#events}
  */
  readonly events: ServiceLevelEvents;
  /**
  * objective block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#objective ServiceLevel#objective}
  */
  readonly objective: ServiceLevelObjective;
}
export interface ServiceLevelEventsBadEventsSelect {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#attribute ServiceLevel#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#function ServiceLevel#function}
  */
  readonly function: string;
}

export function serviceLevelEventsBadEventsSelectToTerraform(struct?: ServiceLevelEventsBadEventsSelectOutputReference | ServiceLevelEventsBadEventsSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    function: cdktf.stringToTerraform(struct!.function),
  }
}

export class ServiceLevelEventsBadEventsSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelEventsBadEventsSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsBadEventsSelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attribute = undefined;
      this._function = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attribute = value.attribute;
      this._function = value.function;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }
}
export interface ServiceLevelEventsBadEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}
  */
  readonly where?: string;
  /**
  * select block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#select ServiceLevel#select}
  */
  readonly select?: ServiceLevelEventsBadEventsSelect;
}

export function serviceLevelEventsBadEventsToTerraform(struct?: ServiceLevelEventsBadEventsOutputReference | ServiceLevelEventsBadEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    where: cdktf.stringToTerraform(struct!.where),
    select: serviceLevelEventsBadEventsSelectToTerraform(struct!.select),
  }
}

export class ServiceLevelEventsBadEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsBadEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._where = undefined;
      this._select.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._where = value.where;
      this._select.internalValue = value.select;
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

  // select - computed: false, optional: true, required: false
  private _select = new ServiceLevelEventsBadEventsSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: ServiceLevelEventsBadEventsSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }
}
export interface ServiceLevelEventsGoodEventsSelect {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#attribute ServiceLevel#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#function ServiceLevel#function}
  */
  readonly function: string;
}

export function serviceLevelEventsGoodEventsSelectToTerraform(struct?: ServiceLevelEventsGoodEventsSelectOutputReference | ServiceLevelEventsGoodEventsSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    function: cdktf.stringToTerraform(struct!.function),
  }
}

export class ServiceLevelEventsGoodEventsSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelEventsGoodEventsSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsGoodEventsSelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attribute = undefined;
      this._function = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attribute = value.attribute;
      this._function = value.function;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }
}
export interface ServiceLevelEventsGoodEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}
  */
  readonly where?: string;
  /**
  * select block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#select ServiceLevel#select}
  */
  readonly select?: ServiceLevelEventsGoodEventsSelect;
}

export function serviceLevelEventsGoodEventsToTerraform(struct?: ServiceLevelEventsGoodEventsOutputReference | ServiceLevelEventsGoodEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    where: cdktf.stringToTerraform(struct!.where),
    select: serviceLevelEventsGoodEventsSelectToTerraform(struct!.select),
  }
}

export class ServiceLevelEventsGoodEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsGoodEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._where = undefined;
      this._select.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._where = value.where;
      this._select.internalValue = value.select;
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

  // select - computed: false, optional: true, required: false
  private _select = new ServiceLevelEventsGoodEventsSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: ServiceLevelEventsGoodEventsSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }
}
export interface ServiceLevelEventsValidEventsSelect {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#attribute ServiceLevel#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#function ServiceLevel#function}
  */
  readonly function: string;
}

export function serviceLevelEventsValidEventsSelectToTerraform(struct?: ServiceLevelEventsValidEventsSelectOutputReference | ServiceLevelEventsValidEventsSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    function: cdktf.stringToTerraform(struct!.function),
  }
}

export class ServiceLevelEventsValidEventsSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelEventsValidEventsSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsValidEventsSelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attribute = undefined;
      this._function = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attribute = value.attribute;
      this._function = value.function;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }
}
export interface ServiceLevelEventsValidEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#from ServiceLevel#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#where ServiceLevel#where}
  */
  readonly where?: string;
  /**
  * select block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#select ServiceLevel#select}
  */
  readonly select?: ServiceLevelEventsValidEventsSelect;
}

export function serviceLevelEventsValidEventsToTerraform(struct?: ServiceLevelEventsValidEventsOutputReference | ServiceLevelEventsValidEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    where: cdktf.stringToTerraform(struct!.where),
    select: serviceLevelEventsValidEventsSelectToTerraform(struct!.select),
  }
}

export class ServiceLevelEventsValidEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelEventsValidEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._where = undefined;
      this._select.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._where = value.where;
      this._select.internalValue = value.select;
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

  // select - computed: false, optional: true, required: false
  private _select = new ServiceLevelEventsValidEventsSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: ServiceLevelEventsValidEventsSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }
}
export interface ServiceLevelEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#account_id ServiceLevel#account_id}
  */
  readonly accountId: number;
  /**
  * bad_events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#bad_events ServiceLevel#bad_events}
  */
  readonly badEvents?: ServiceLevelEventsBadEvents;
  /**
  * good_events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#good_events ServiceLevel#good_events}
  */
  readonly goodEvents?: ServiceLevelEventsGoodEvents;
  /**
  * valid_events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#valid_events ServiceLevel#valid_events}
  */
  readonly validEvents: ServiceLevelEventsValidEvents;
}

export function serviceLevelEventsToTerraform(struct?: ServiceLevelEventsOutputReference | ServiceLevelEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  private _badEvents = new ServiceLevelEventsBadEventsOutputReference(this, "bad_events");
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
  private _goodEvents = new ServiceLevelEventsGoodEventsOutputReference(this, "good_events");
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
  private _validEvents = new ServiceLevelEventsValidEventsOutputReference(this, "valid_events");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#count ServiceLevel#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#unit ServiceLevel#unit}
  */
  readonly unit: string;
}

export function serviceLevelObjectiveTimeWindowRollingToTerraform(struct?: ServiceLevelObjectiveTimeWindowRollingOutputReference | ServiceLevelObjectiveTimeWindowRolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#rolling ServiceLevel#rolling}
  */
  readonly rolling: ServiceLevelObjectiveTimeWindowRolling;
}

export function serviceLevelObjectiveTimeWindowToTerraform(struct?: ServiceLevelObjectiveTimeWindowOutputReference | ServiceLevelObjectiveTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  private _rolling = new ServiceLevelObjectiveTimeWindowRollingOutputReference(this, "rolling");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#description ServiceLevel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#name ServiceLevel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#target ServiceLevel#target}
  */
  readonly target: number;
  /**
  * time_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/service_level#time_window ServiceLevel#time_window}
  */
  readonly timeWindow: ServiceLevelObjectiveTimeWindow;
}

export function serviceLevelObjectiveToTerraform(struct?: ServiceLevelObjectiveOutputReference | ServiceLevelObjective): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class ServiceLevelObjectiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceLevelObjective | undefined {
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
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLevelObjective | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._target = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._target = value.target;
      this._timeWindow.internalValue = value.timeWindow;
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

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow = new ServiceLevelObjectiveTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: ServiceLevelObjectiveTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/service_level newrelic_service_level}
*/
export class ServiceLevel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_service_level";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/service_level newrelic_service_level} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLevelConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_service_level',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.8.0',
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
    this._description = config.description;
    this._guid = config.guid;
    this._id = config.id;
    this._name = config.name;
    this._events.internalValue = config.events;
    this._objective.internalValue = config.objective;
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

  // sli_guid - computed: true, optional: false, required: false
  public get sliGuid() {
    return this.getStringAttribute('sli_guid');
  }

  // sli_id - computed: true, optional: false, required: false
  public get sliId() {
    return this.getStringAttribute('sli_id');
  }

  // events - computed: false, optional: false, required: true
  private _events = new ServiceLevelEventsOutputReference(this, "events");
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

  // objective - computed: false, optional: false, required: true
  private _objective = new ServiceLevelObjectiveOutputReference(this, "objective");
  public get objective() {
    return this._objective;
  }
  public putObjective(value: ServiceLevelObjective) {
    this._objective.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      guid: cdktf.stringToTerraform(this._guid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      events: serviceLevelEventsToTerraform(this._events.internalValue),
      objective: serviceLevelObjectiveToTerraform(this._objective.internalValue),
    };
  }
}
