/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObfuscationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id associated with the obfuscation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#account_id ObfuscationRule#account_id}
  */
  readonly accountId?: number;
  /**
  * Description of rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#description ObfuscationRule#description}
  */
  readonly description?: string;
  /**
  * Whether the rule should be applied or not to incoming data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#enabled ObfuscationRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * NRQL for determining whether a given log record should have obfuscation actions applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#filter ObfuscationRule#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#id ObfuscationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#name ObfuscationRule#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#action ObfuscationRule#action}
  */
  readonly action: ObfuscationRuleAction[] | cdktf.IResolvable;
}
export interface ObfuscationRuleAction {
  /**
  * Attribute names for action. An empty list applies the action to all the attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#attribute ObfuscationRule#attribute}
  */
  readonly attribute: string[];
  /**
  * Expression Id for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#expression_id ObfuscationRule#expression_id}
  */
  readonly expressionId: string;
  /**
  * Obfuscation method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#method ObfuscationRule#method}
  */
  readonly method: string;
}

export function obfuscationRuleActionToTerraform(struct?: ObfuscationRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attribute),
    expression_id: cdktf.stringToTerraform(struct!.expressionId),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function obfuscationRuleActionToHclTerraform(struct?: ObfuscationRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attribute),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expression_id: {
      value: cdktf.stringToHclTerraform(struct!.expressionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObfuscationRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObfuscationRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._expressionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionId = this._expressionId;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObfuscationRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._expressionId = undefined;
      this._method = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._expressionId = value.expressionId;
      this._method = value.method;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string[]; 
  public get attribute() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute'));
  }
  public set attribute(value: string[]) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // expression_id - computed: false, optional: false, required: true
  private _expressionId?: string; 
  public get expressionId() {
    return this.getStringAttribute('expression_id');
  }
  public set expressionId(value: string) {
    this._expressionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionIdInput() {
    return this._expressionId;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}

export class ObfuscationRuleActionList extends cdktf.ComplexList {
  public internalValue? : ObfuscationRuleAction[] | cdktf.IResolvable

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
  public get(index: number): ObfuscationRuleActionOutputReference {
    return new ObfuscationRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule newrelic_obfuscation_rule}
*/
export class ObfuscationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_obfuscation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObfuscationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObfuscationRule to import
  * @param importFromId The id of the existing ObfuscationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObfuscationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_obfuscation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/obfuscation_rule newrelic_obfuscation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObfuscationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ObfuscationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_obfuscation_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.57.1',
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
    this._enabled = config.enabled;
    this._filter = config.filter;
    this._id = config.id;
    this._name = config.name;
    this._action.internalValue = config.action;
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

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // action - computed: false, optional: false, required: true
  private _action = new ObfuscationRuleActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ObfuscationRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      action: cdktf.listMapper(obfuscationRuleActionToTerraform, true)(this._action.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      action: {
        value: cdktf.listMapperHcl(obfuscationRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObfuscationRuleActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
