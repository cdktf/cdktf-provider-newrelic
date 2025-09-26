/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsMultilocationAlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set whether to enable the alert condition. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#enabled SyntheticsMultilocationAlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The GUIDs of the Synthetics monitors to alert on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#entities SyntheticsMultilocationAlertCondition#entities}
  */
  readonly entities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The title of this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#name SyntheticsMultilocationAlertCondition#name}
  */
  readonly name: string;
  /**
  * The ID of the policy where this condition will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#policy_id SyntheticsMultilocationAlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Runbook URL to display in notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.  Must be in the range of 300 to 2592000 (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}
  */
  readonly violationTimeLimitSeconds?: number;
  /**
  * critical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#critical SyntheticsMultilocationAlertCondition#critical}
  */
  readonly critical: SyntheticsMultilocationAlertConditionCritical;
  /**
  * warning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#warning SyntheticsMultilocationAlertCondition#warning}
  */
  readonly warning?: SyntheticsMultilocationAlertConditionWarning;
}
export interface SyntheticsMultilocationAlertConditionCritical {
  /**
  * The minimum number of monitor locations that must be concurrently failing before an incident is opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}
  */
  readonly threshold: number;
}

export function syntheticsMultilocationAlertConditionCriticalToTerraform(struct?: SyntheticsMultilocationAlertConditionCriticalOutputReference | SyntheticsMultilocationAlertConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function syntheticsMultilocationAlertConditionCriticalToHclTerraform(struct?: SyntheticsMultilocationAlertConditionCriticalOutputReference | SyntheticsMultilocationAlertConditionCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsMultilocationAlertConditionCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsMultilocationAlertConditionCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsMultilocationAlertConditionCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SyntheticsMultilocationAlertConditionWarning {
  /**
  * The minimum number of monitor locations that must be concurrently failing before an incident is opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}
  */
  readonly threshold: number;
}

export function syntheticsMultilocationAlertConditionWarningToTerraform(struct?: SyntheticsMultilocationAlertConditionWarningOutputReference | SyntheticsMultilocationAlertConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function syntheticsMultilocationAlertConditionWarningToHclTerraform(struct?: SyntheticsMultilocationAlertConditionWarningOutputReference | SyntheticsMultilocationAlertConditionWarning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsMultilocationAlertConditionWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsMultilocationAlertConditionWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsMultilocationAlertConditionWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition newrelic_synthetics_multilocation_alert_condition}
*/
export class SyntheticsMultilocationAlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_multilocation_alert_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsMultilocationAlertCondition to import
  * @param importFromId The id of the existing SyntheticsMultilocationAlertCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsMultilocationAlertCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_synthetics_multilocation_alert_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.2/docs/resources/synthetics_multilocation_alert_condition newrelic_synthetics_multilocation_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsMultilocationAlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsMultilocationAlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_multilocation_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.70.2',
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
    this._enabled = config.enabled;
    this._entities = config.entities;
    this._id = config.id;
    this._name = config.name;
    this._policyId = config.policyId;
    this._runbookUrl = config.runbookUrl;
    this._violationTimeLimitSeconds = config.violationTimeLimitSeconds;
    this._critical.internalValue = config.critical;
    this._warning.internalValue = config.warning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entities - computed: false, optional: false, required: true
  private _entities?: string[]; 
  public get entities() {
    return this.getListAttribute('entities');
  }
  public set entities(value: string[]) {
    this._entities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities;
  }

  // entity_guid - computed: true, optional: false, required: false
  public get entityGuid() {
    return this.getStringAttribute('entity_guid');
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // runbook_url - computed: false, optional: true, required: false
  private _runbookUrl?: string; 
  public get runbookUrl() {
    return this.getStringAttribute('runbook_url');
  }
  public set runbookUrl(value: string) {
    this._runbookUrl = value;
  }
  public resetRunbookUrl() {
    this._runbookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookUrlInput() {
    return this._runbookUrl;
  }

  // violation_time_limit_seconds - computed: false, optional: true, required: false
  private _violationTimeLimitSeconds?: number; 
  public get violationTimeLimitSeconds() {
    return this.getNumberAttribute('violation_time_limit_seconds');
  }
  public set violationTimeLimitSeconds(value: number) {
    this._violationTimeLimitSeconds = value;
  }
  public resetViolationTimeLimitSeconds() {
    this._violationTimeLimitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationTimeLimitSecondsInput() {
    return this._violationTimeLimitSeconds;
  }

  // critical - computed: false, optional: false, required: true
  private _critical = new SyntheticsMultilocationAlertConditionCriticalOutputReference(this, "critical");
  public get critical() {
    return this._critical;
  }
  public putCritical(value: SyntheticsMultilocationAlertConditionCritical) {
    this._critical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical.internalValue;
  }

  // warning - computed: false, optional: true, required: false
  private _warning = new SyntheticsMultilocationAlertConditionWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: SyntheticsMultilocationAlertConditionWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      entities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entities),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.numberToTerraform(this._policyId),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
      violation_time_limit_seconds: cdktf.numberToTerraform(this._violationTimeLimitSeconds),
      critical: syntheticsMultilocationAlertConditionCriticalToTerraform(this._critical.internalValue),
      warning: syntheticsMultilocationAlertConditionWarningToTerraform(this._warning.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entities),
        isBlock: false,
        type: "list",
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
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runbook_url: {
        value: cdktf.stringToHclTerraform(this._runbookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violation_time_limit_seconds: {
        value: cdktf.numberToHclTerraform(this._violationTimeLimitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      critical: {
        value: syntheticsMultilocationAlertConditionCriticalToHclTerraform(this._critical.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsMultilocationAlertConditionCriticalList",
      },
      warning: {
        value: syntheticsMultilocationAlertConditionWarningToHclTerraform(this._warning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsMultilocationAlertConditionWarningList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
