/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogParsingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id associated with the obfuscation expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#account_id LogParsingRule#account_id}
  */
  readonly accountId?: number;
  /**
  * The parsing rule will apply to value of this attribute. If field is not provided, value will default to message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#attribute LogParsingRule#attribute}
  */
  readonly attribute?: string;
  /**
  * Whether or not this rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#enabled LogParsingRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The Grok of what to parse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#grok LogParsingRule#grok}
  */
  readonly grok: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#id LogParsingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Lucene to match events to the parsing rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#lucene LogParsingRule#lucene}
  */
  readonly lucene: string;
  /**
  * Whether the Grok pattern matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#matched LogParsingRule#matched}
  */
  readonly matched?: boolean | cdktf.IResolvable;
  /**
  * A description of what this parsing rule represents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#name LogParsingRule#name}
  */
  readonly name: string;
  /**
  * The NRQL to match events to the parsing rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#nrql LogParsingRule#nrql}
  */
  readonly nrql: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule newrelic_log_parsing_rule}
*/
export class LogParsingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_log_parsing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogParsingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogParsingRule to import
  * @param importFromId The id of the existing LogParsingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogParsingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_log_parsing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.56.0/docs/resources/log_parsing_rule newrelic_log_parsing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogParsingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LogParsingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_log_parsing_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.56.0',
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
    this._attribute = config.attribute;
    this._enabled = config.enabled;
    this._grok = config.grok;
    this._id = config.id;
    this._lucene = config.lucene;
    this._matched = config.matched;
    this._name = config.name;
    this._nrql = config.nrql;
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

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // grok - computed: false, optional: false, required: true
  private _grok?: string; 
  public get grok() {
    return this.getStringAttribute('grok');
  }
  public set grok(value: string) {
    this._grok = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok;
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

  // lucene - computed: false, optional: false, required: true
  private _lucene?: string; 
  public get lucene() {
    return this.getStringAttribute('lucene');
  }
  public set lucene(value: string) {
    this._lucene = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luceneInput() {
    return this._lucene;
  }

  // matched - computed: true, optional: true, required: false
  private _matched?: boolean | cdktf.IResolvable; 
  public get matched() {
    return this.getBooleanAttribute('matched');
  }
  public set matched(value: boolean | cdktf.IResolvable) {
    this._matched = value;
  }
  public resetMatched() {
    this._matched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedInput() {
    return this._matched;
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

  // nrql - computed: false, optional: false, required: true
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      attribute: cdktf.stringToTerraform(this._attribute),
      enabled: cdktf.booleanToTerraform(this._enabled),
      grok: cdktf.stringToTerraform(this._grok),
      id: cdktf.stringToTerraform(this._id),
      lucene: cdktf.stringToTerraform(this._lucene),
      matched: cdktf.booleanToTerraform(this._matched),
      name: cdktf.stringToTerraform(this._name),
      nrql: cdktf.stringToTerraform(this._nrql),
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
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
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
      grok: {
        value: cdktf.stringToHclTerraform(this._grok),
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
      lucene: {
        value: cdktf.stringToHclTerraform(this._lucene),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matched: {
        value: cdktf.booleanToHclTerraform(this._matched),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nrql: {
        value: cdktf.stringToHclTerraform(this._nrql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
