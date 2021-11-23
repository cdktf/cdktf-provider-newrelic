// https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Required) The name of the channel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#name AlertChannel#name}
  */
  readonly name: string;
  /**
  * (Required) The type of channel. One of: (opsgenie, pagerduty, slack, user, victorops, webhook, email).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#type AlertChannel#type}
  */
  readonly type: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#config AlertChannel#config}
  */
  readonly config?: AlertChannelConfigA;
}
export interface AlertChannelConfigA {
  /**
  * The API key for integrating with OpsGenie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#api_key AlertChannel#api_key}
  */
  readonly apiKey?: string;
  /**
  * Specifies an authentication password for use with a channel. Supported by the webhook channel type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#auth_password AlertChannel#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Specifies an authentication method for use with a channel. Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#auth_type AlertChannel#auth_type}
  */
  readonly authType?: string;
  /**
  * Specifies an authentication username for use with a channel. Supported by the webhook channel type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#auth_username AlertChannel#auth_username}
  */
  readonly authUsername?: string;
  /**
  * The base URL of the webhook destination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#base_url AlertChannel#base_url}
  */
  readonly baseUrl?: string;
  /**
  * The Slack channel to send notifications to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#channel AlertChannel#channel}
  */
  readonly channel?: string;
  /**
  * A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#headers AlertChannel#headers}
  */
  readonly headers?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#headers_string AlertChannel#headers_string}
  */
  readonly headersString?: string;
  /**
  * true or false. Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#include_json_attachment AlertChannel#include_json_attachment}
  */
  readonly includeJsonAttachment?: string;
  /**
  * The key for integrating with VictorOps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#key AlertChannel#key}
  */
  readonly key?: string;
  /**
  * A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#payload AlertChannel#payload}
  */
  readonly payload?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#payload_string AlertChannel#payload_string}
  */
  readonly payloadString?: string;
  /**
  * Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#payload_type AlertChannel#payload_type}
  */
  readonly payloadType?: string;
  /**
  * A set of recipients for targeting notifications. Multiple values are comma separated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#recipients AlertChannel#recipients}
  */
  readonly recipients?: string;
  /**
  * The data center region to store your data. Valid values are US and EU. Default is US.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#region AlertChannel#region}
  */
  readonly region?: string;
  /**
  * The route key for integrating with VictorOps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#route_key AlertChannel#route_key}
  */
  readonly routeKey?: string;
  /**
  * Specifies the service key for integrating with Pagerduty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#service_key AlertChannel#service_key}
  */
  readonly serviceKey?: string;
  /**
  * A set of tags for targeting notifications. Multiple values are comma separated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#tags AlertChannel#tags}
  */
  readonly tags?: string;
  /**
  * A set of teams for targeting notifications. Multiple values are comma separated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#teams AlertChannel#teams}
  */
  readonly teams?: string;
  /**
  * Your organization's Slack URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#url AlertChannel#url}
  */
  readonly url?: string;
  /**
  * The user ID for use with the user channel type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html#user_id AlertChannel#user_id}
  */
  readonly userId?: string;
}

function alertChannelConfigAToTerraform(struct?: AlertChannelConfigAOutputReference | AlertChannelConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    auth_username: cdktf.stringToTerraform(struct!.authUsername),
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    channel: cdktf.stringToTerraform(struct!.channel),
    headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headers),
    headers_string: cdktf.stringToTerraform(struct!.headersString),
    include_json_attachment: cdktf.stringToTerraform(struct!.includeJsonAttachment),
    key: cdktf.stringToTerraform(struct!.key),
    payload: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.payload),
    payload_string: cdktf.stringToTerraform(struct!.payloadString),
    payload_type: cdktf.stringToTerraform(struct!.payloadType),
    recipients: cdktf.stringToTerraform(struct!.recipients),
    region: cdktf.stringToTerraform(struct!.region),
    route_key: cdktf.stringToTerraform(struct!.routeKey),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
    tags: cdktf.stringToTerraform(struct!.tags),
    teams: cdktf.stringToTerraform(struct!.teams),
    url: cdktf.stringToTerraform(struct!.url),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}

export class AlertChannelConfigAOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string | undefined; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string | undefined; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string | undefined) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string | undefined; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string | undefined) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string | undefined; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string | undefined) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string | undefined; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string | undefined; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string | undefined) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }

  // headers_string - computed: false, optional: true, required: false
  private _headersString?: string | undefined; 
  public get headersString() {
    return this.getStringAttribute('headers_string');
  }
  public set headersString(value: string | undefined) {
    this._headersString = value;
  }
  public resetHeadersString() {
    this._headersString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersStringInput() {
    return this._headersString
  }

  // include_json_attachment - computed: false, optional: true, required: false
  private _includeJsonAttachment?: string | undefined; 
  public get includeJsonAttachment() {
    return this.getStringAttribute('include_json_attachment');
  }
  public set includeJsonAttachment(value: string | undefined) {
    this._includeJsonAttachment = value;
  }
  public resetIncludeJsonAttachment() {
    this._includeJsonAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeJsonAttachmentInput() {
    return this._includeJsonAttachment
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get payload() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('payload') as any;
  }
  public set payload(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload
  }

  // payload_string - computed: false, optional: true, required: false
  private _payloadString?: string | undefined; 
  public get payloadString() {
    return this.getStringAttribute('payload_string');
  }
  public set payloadString(value: string | undefined) {
    this._payloadString = value;
  }
  public resetPayloadString() {
    this._payloadString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadStringInput() {
    return this._payloadString
  }

  // payload_type - computed: false, optional: true, required: false
  private _payloadType?: string | undefined; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string | undefined) {
    this._payloadType = value;
  }
  public resetPayloadType() {
    this._payloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string | undefined; 
  public get recipients() {
    return this.getStringAttribute('recipients');
  }
  public set recipients(value: string | undefined) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients
  }

  // region - computed: false, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // route_key - computed: false, optional: true, required: false
  private _routeKey?: string | undefined; 
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string | undefined) {
    this._routeKey = value;
  }
  public resetRouteKey() {
    this._routeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey
  }

  // service_key - computed: false, optional: true, required: false
  private _serviceKey?: string | undefined; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string | undefined) {
    this._serviceKey = value;
  }
  public resetServiceKey() {
    this._serviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string | undefined; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string | undefined; 
  public get teams() {
    return this.getStringAttribute('teams');
  }
  public set teams(value: string | undefined) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams
  }

  // url - computed: false, optional: true, required: false
  private _url?: string | undefined; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string | undefined; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string | undefined) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html newrelic_alert_channel}
*/
export class AlertChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_alert_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/alert_channel.html newrelic_alert_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelConfig
  */
  public constructor(scope: Construct, id: string, config: AlertChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_channel',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._type = config.type;
    this._config = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._name
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // config - computed: false, optional: true, required: false
  private _config?: AlertChannelConfigA | undefined; 
  private __configOutput = new AlertChannelConfigAOutputReference(this as any, "config", true);
  public get config() {
    return this.__configOutput;
  }
  public putConfig(value: AlertChannelConfigA | undefined) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      config: alertChannelConfigAToTerraform(this._config),
    };
  }
}
