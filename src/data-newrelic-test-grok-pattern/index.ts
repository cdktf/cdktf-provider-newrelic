// https://www.terraform.io/docs/providers/newrelic/d/test_grok_pattern
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicTestGrokPatternConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id associated with the test grok.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/test_grok_pattern#account_id DataNewrelicTestGrokPattern#account_id}
  */
  readonly accountId?: number;
  /**
  * The Grok pattern to test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/test_grok_pattern#grok DataNewrelicTestGrokPattern#grok}
  */
  readonly grok: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/test_grok_pattern#id DataNewrelicTestGrokPattern#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The log lines to test the Grok pattern against.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/test_grok_pattern#log_lines DataNewrelicTestGrokPattern#log_lines}
  */
  readonly logLines: string[];
}
export interface DataNewrelicTestGrokPatternTestGrokAttributes {
}

export function dataNewrelicTestGrokPatternTestGrokAttributesToTerraform(struct?: DataNewrelicTestGrokPatternTestGrokAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataNewrelicTestGrokPatternTestGrokAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNewrelicTestGrokPatternTestGrokAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNewrelicTestGrokPatternTestGrokAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNewrelicTestGrokPatternTestGrokAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataNewrelicTestGrokPatternTestGrokAttributesOutputReference {
    return new DataNewrelicTestGrokPatternTestGrokAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNewrelicTestGrokPatternTestGrok {
}

export function dataNewrelicTestGrokPatternTestGrokToTerraform(struct?: DataNewrelicTestGrokPatternTestGrok): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataNewrelicTestGrokPatternTestGrokOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNewrelicTestGrokPatternTestGrok | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNewrelicTestGrokPatternTestGrok | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataNewrelicTestGrokPatternTestGrokAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }

  // log_line - computed: true, optional: false, required: false
  public get logLine() {
    return this.getStringAttribute('log_line');
  }

  // matched - computed: true, optional: false, required: false
  public get matched() {
    return this.getBooleanAttribute('matched');
  }
}

export class DataNewrelicTestGrokPatternTestGrokList extends cdktf.ComplexList {

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
  public get(index: number): DataNewrelicTestGrokPatternTestGrokOutputReference {
    return new DataNewrelicTestGrokPatternTestGrokOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/test_grok_pattern newrelic_test_grok_pattern}
*/
export class DataNewrelicTestGrokPattern extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_test_grok_pattern";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/test_grok_pattern newrelic_test_grok_pattern} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicTestGrokPatternConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicTestGrokPatternConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_test_grok_pattern',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.18.0',
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
    this._grok = config.grok;
    this._id = config.id;
    this._logLines = config.logLines;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
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

  // log_lines - computed: false, optional: false, required: true
  private _logLines?: string[]; 
  public get logLines() {
    return cdktf.Fn.tolist(this.getListAttribute('log_lines'));
  }
  public set logLines(value: string[]) {
    this._logLines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLinesInput() {
    return this._logLines;
  }

  // test_grok - computed: true, optional: false, required: false
  private _testGrok = new DataNewrelicTestGrokPatternTestGrokList(this, "test_grok", false);
  public get testGrok() {
    return this._testGrok;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      grok: cdktf.stringToTerraform(this._grok),
      id: cdktf.stringToTerraform(this._id),
      log_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logLines),
    };
  }
}
