// https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorDowntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the New Relic account in which the Monitor Downtime shall be created. Defaults to the `account_id` in the provider{} configuration if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#account_id MonitorDowntime#account_id}
  */
  readonly accountId?: number;
  /**
  * A datetime stamp signifying the end of the Monitor Downtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#end_time MonitorDowntime#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#id MonitorDowntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of maintenance days to be included with the created weekly Monitor Downtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#maintenance_days MonitorDowntime#maintenance_days}
  */
  readonly maintenanceDays?: string[];
  /**
  * An identifier of the type of Monitor Downtime to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#mode MonitorDowntime#mode}
  */
  readonly mode: string;
  /**
  * A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#monitor_guids MonitorDowntime#monitor_guids}
  */
  readonly monitorGuids?: string[];
  /**
  * A name to identify the Monitor Downtime to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#name MonitorDowntime#name}
  */
  readonly name: string;
  /**
  * A datetime stamp signifying the start of the Monitor Downtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#start_time MonitorDowntime#start_time}
  */
  readonly startTime: string;
  /**
  * The timezone that applies to the Monitor Downtime schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#time_zone MonitorDowntime#time_zone}
  */
  readonly timeZone: string;
  /**
  * end_repeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#end_repeat MonitorDowntime#end_repeat}
  */
  readonly endRepeat?: MonitorDowntimeEndRepeat;
  /**
  * frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#frequency MonitorDowntime#frequency}
  */
  readonly frequency?: MonitorDowntimeFrequency;
}
export interface MonitorDowntimeEndRepeat {
  /**
  * A date, on which the Monitor Downtime's repeat cycle is expected to end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#on_date MonitorDowntime#on_date}
  */
  readonly onDate?: string;
  /**
  * Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#on_repeat MonitorDowntime#on_repeat}
  */
  readonly onRepeat?: number;
}

export function monitorDowntimeEndRepeatToTerraform(struct?: MonitorDowntimeEndRepeatOutputReference | MonitorDowntimeEndRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_date: cdktf.stringToTerraform(struct!.onDate),
    on_repeat: cdktf.numberToTerraform(struct!.onRepeat),
  }
}


export function monitorDowntimeEndRepeatToHclTerraform(struct?: MonitorDowntimeEndRepeatOutputReference | MonitorDowntimeEndRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_date: {
      value: cdktf.stringToHclTerraform(struct!.onDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_repeat: {
      value: cdktf.numberToHclTerraform(struct!.onRepeat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDowntimeEndRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDowntimeEndRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDate = this._onDate;
    }
    if (this._onRepeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.onRepeat = this._onRepeat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDowntimeEndRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDate = undefined;
      this._onRepeat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDate = value.onDate;
      this._onRepeat = value.onRepeat;
    }
  }

  // on_date - computed: false, optional: true, required: false
  private _onDate?: string; 
  public get onDate() {
    return this.getStringAttribute('on_date');
  }
  public set onDate(value: string) {
    this._onDate = value;
  }
  public resetOnDate() {
    this._onDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDateInput() {
    return this._onDate;
  }

  // on_repeat - computed: false, optional: true, required: false
  private _onRepeat?: number; 
  public get onRepeat() {
    return this.getNumberAttribute('on_repeat');
  }
  public set onRepeat(value: number) {
    this._onRepeat = value;
  }
  public resetOnRepeat() {
    this._onRepeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRepeatInput() {
    return this._onRepeat;
  }
}
export interface MonitorDowntimeFrequencyDaysOfWeek {
  /**
  * An occurrence of the day selected within the month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#ordinal_day_of_month MonitorDowntime#ordinal_day_of_month}
  */
  readonly ordinalDayOfMonth: string;
  /**
  * The day of the week on which the Monitor Downtime would run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#week_day MonitorDowntime#week_day}
  */
  readonly weekDay: string;
}

export function monitorDowntimeFrequencyDaysOfWeekToTerraform(struct?: MonitorDowntimeFrequencyDaysOfWeekOutputReference | MonitorDowntimeFrequencyDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ordinal_day_of_month: cdktf.stringToTerraform(struct!.ordinalDayOfMonth),
    week_day: cdktf.stringToTerraform(struct!.weekDay),
  }
}


export function monitorDowntimeFrequencyDaysOfWeekToHclTerraform(struct?: MonitorDowntimeFrequencyDaysOfWeekOutputReference | MonitorDowntimeFrequencyDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ordinal_day_of_month: {
      value: cdktf.stringToHclTerraform(struct!.ordinalDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_day: {
      value: cdktf.stringToHclTerraform(struct!.weekDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDowntimeFrequencyDaysOfWeekOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDowntimeFrequencyDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ordinalDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalDayOfMonth = this._ordinalDayOfMonth;
    }
    if (this._weekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDay = this._weekDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDowntimeFrequencyDaysOfWeek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ordinalDayOfMonth = undefined;
      this._weekDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ordinalDayOfMonth = value.ordinalDayOfMonth;
      this._weekDay = value.weekDay;
    }
  }

  // ordinal_day_of_month - computed: false, optional: false, required: true
  private _ordinalDayOfMonth?: string; 
  public get ordinalDayOfMonth() {
    return this.getStringAttribute('ordinal_day_of_month');
  }
  public set ordinalDayOfMonth(value: string) {
    this._ordinalDayOfMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalDayOfMonthInput() {
    return this._ordinalDayOfMonth;
  }

  // week_day - computed: false, optional: false, required: true
  private _weekDay?: string; 
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
  public set weekDay(value: string) {
    this._weekDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayInput() {
    return this._weekDay;
  }
}
export interface MonitorDowntimeFrequency {
  /**
  * A numerical list of days of a month on which the Monitor Downtime is scheduled to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#days_of_month MonitorDowntime#days_of_month}
  */
  readonly daysOfMonth?: number[];
  /**
  * days_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#days_of_week MonitorDowntime#days_of_week}
  */
  readonly daysOfWeek?: MonitorDowntimeFrequencyDaysOfWeek;
}

export function monitorDowntimeFrequencyToTerraform(struct?: MonitorDowntimeFrequencyOutputReference | MonitorDowntimeFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfMonth),
    days_of_week: monitorDowntimeFrequencyDaysOfWeekToTerraform(struct!.daysOfWeek),
  }
}


export function monitorDowntimeFrequencyToHclTerraform(struct?: MonitorDowntimeFrequencyOutputReference | MonitorDowntimeFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfMonth),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    days_of_week: {
      value: monitorDowntimeFrequencyDaysOfWeekToHclTerraform(struct!.daysOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDowntimeFrequencyDaysOfWeekList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDowntimeFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDowntimeFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._daysOfWeek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDowntimeFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfMonth = undefined;
      this._daysOfWeek.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfMonth = value.daysOfMonth;
      this._daysOfWeek.internalValue = value.daysOfWeek;
    }
  }

  // days_of_month - computed: false, optional: true, required: false
  private _daysOfMonth?: number[]; 
  public get daysOfMonth() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_of_month')));
  }
  public set daysOfMonth(value: number[]) {
    this._daysOfMonth = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek = new MonitorDowntimeFrequencyDaysOfWeekOutputReference(this, "days_of_week");
  public get daysOfWeek() {
    return this._daysOfWeek;
  }
  public putDaysOfWeek(value: MonitorDowntimeFrequencyDaysOfWeek) {
    this._daysOfWeek.internalValue = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime newrelic_monitor_downtime}
*/
export class MonitorDowntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_monitor_downtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorDowntime to import
  * @param importFromId The id of the existing MonitorDowntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorDowntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_monitor_downtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/monitor_downtime newrelic_monitor_downtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorDowntimeConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorDowntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_monitor_downtime',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.54.1',
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
    this._endTime = config.endTime;
    this._id = config.id;
    this._maintenanceDays = config.maintenanceDays;
    this._mode = config.mode;
    this._monitorGuids = config.monitorGuids;
    this._name = config.name;
    this._startTime = config.startTime;
    this._timeZone = config.timeZone;
    this._endRepeat.internalValue = config.endRepeat;
    this._frequency.internalValue = config.frequency;
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

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // maintenance_days - computed: false, optional: true, required: false
  private _maintenanceDays?: string[]; 
  public get maintenanceDays() {
    return cdktf.Fn.tolist(this.getListAttribute('maintenance_days'));
  }
  public set maintenanceDays(value: string[]) {
    this._maintenanceDays = value;
  }
  public resetMaintenanceDays() {
    this._maintenanceDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDaysInput() {
    return this._maintenanceDays;
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

  // monitor_guids - computed: false, optional: true, required: false
  private _monitorGuids?: string[]; 
  public get monitorGuids() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_guids'));
  }
  public set monitorGuids(value: string[]) {
    this._monitorGuids = value;
  }
  public resetMonitorGuids() {
    this._monitorGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorGuidsInput() {
    return this._monitorGuids;
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // end_repeat - computed: false, optional: true, required: false
  private _endRepeat = new MonitorDowntimeEndRepeatOutputReference(this, "end_repeat");
  public get endRepeat() {
    return this._endRepeat;
  }
  public putEndRepeat(value: MonitorDowntimeEndRepeat) {
    this._endRepeat.internalValue = value;
  }
  public resetEndRepeat() {
    this._endRepeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endRepeatInput() {
    return this._endRepeat.internalValue;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency = new MonitorDowntimeFrequencyOutputReference(this, "frequency");
  public get frequency() {
    return this._frequency;
  }
  public putFrequency(value: MonitorDowntimeFrequency) {
    this._frequency.internalValue = value;
  }
  public resetFrequency() {
    this._frequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      maintenance_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maintenanceDays),
      mode: cdktf.stringToTerraform(this._mode),
      monitor_guids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGuids),
      name: cdktf.stringToTerraform(this._name),
      start_time: cdktf.stringToTerraform(this._startTime),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      end_repeat: monitorDowntimeEndRepeatToTerraform(this._endRepeat.internalValue),
      frequency: monitorDowntimeFrequencyToTerraform(this._frequency.internalValue),
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
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      maintenance_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maintenanceDays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_guids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorGuids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_repeat: {
        value: monitorDowntimeEndRepeatToHclTerraform(this._endRepeat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorDowntimeEndRepeatList",
      },
      frequency: {
        value: monitorDowntimeFrequencyToHclTerraform(this._frequency.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorDowntimeFrequencyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
