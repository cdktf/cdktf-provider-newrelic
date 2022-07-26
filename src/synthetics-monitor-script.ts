// https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsMonitorScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#id SyntheticsMonitorScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the monitor to attach the script to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#monitor_id SyntheticsMonitorScript#monitor_id}
  */
  readonly monitorId: string;
  /**
  * The plaintext representing the monitor script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#text SyntheticsMonitorScript#text}
  */
  readonly text: string;
  /**
  * location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#location SyntheticsMonitorScript#location}
  */
  readonly location?: SyntheticsMonitorScriptLocation[] | cdktf.IResolvable;
}
export interface SyntheticsMonitorScriptLocation {
  /**
  * The HMAC for the monitor script location. Use only one of `hmac` or `vse_password.`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#hmac SyntheticsMonitorScript#hmac}
  */
  readonly hmac?: string;
  /**
  * The monitor script location name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#name SyntheticsMonitorScript#name}
  */
  readonly name: string;
  /**
  * The password for the monitor script location used to calculate HMAC. Use only one of `vse_password` or `hmac.`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script#vse_password SyntheticsMonitorScript#vse_password}
  */
  readonly vsePassword?: string;
}

export function syntheticsMonitorScriptLocationToTerraform(struct?: SyntheticsMonitorScriptLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac: cdktf.stringToTerraform(struct!.hmac),
    name: cdktf.stringToTerraform(struct!.name),
    vse_password: cdktf.stringToTerraform(struct!.vsePassword),
  }
}

export class SyntheticsMonitorScriptLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticsMonitorScriptLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmac = this._hmac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vsePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsePassword = this._vsePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsMonitorScriptLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hmac = undefined;
      this._name = undefined;
      this._vsePassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hmac = value.hmac;
      this._name = value.name;
      this._vsePassword = value.vsePassword;
    }
  }

  // hmac - computed: false, optional: true, required: false
  private _hmac?: string; 
  public get hmac() {
    return this.getStringAttribute('hmac');
  }
  public set hmac(value: string) {
    this._hmac = value;
  }
  public resetHmac() {
    this._hmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacInput() {
    return this._hmac;
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

  // vse_password - computed: false, optional: true, required: false
  private _vsePassword?: string; 
  public get vsePassword() {
    return this.getStringAttribute('vse_password');
  }
  public set vsePassword(value: string) {
    this._vsePassword = value;
  }
  public resetVsePassword() {
    this._vsePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsePasswordInput() {
    return this._vsePassword;
  }
}

export class SyntheticsMonitorScriptLocationList extends cdktf.ComplexList {
  public internalValue? : SyntheticsMonitorScriptLocation[] | cdktf.IResolvable

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
  public get(index: number): SyntheticsMonitorScriptLocationOutputReference {
    return new SyntheticsMonitorScriptLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script newrelic_synthetics_monitor_script}
*/
export class SyntheticsMonitorScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_synthetics_monitor_script";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script newrelic_synthetics_monitor_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsMonitorScriptConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsMonitorScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_monitor_script',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.49.1',
        providerVersionConstraint: '~> 2.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._monitorId = config.monitorId;
    this._text = config.text;
    this._location.internalValue = config.location;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // location - computed: false, optional: true, required: false
  private _location = new SyntheticsMonitorScriptLocationList(this, "location", false);
  public get location() {
    return this._location;
  }
  public putLocation(value: SyntheticsMonitorScriptLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitor_id: cdktf.stringToTerraform(this._monitorId),
      text: cdktf.stringToTerraform(this._text),
      location: cdktf.listMapper(syntheticsMonitorScriptLocationToTerraform, true)(this._location.internalValue),
    };
  }
}
