// https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID where you want to create alert channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#account_id AlertChannel#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#id AlertChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Required) The name of the channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#name AlertChannel#name}
  */
  readonly name: string;
  /**
  * (Required) The type of channel. One of: (slack, user, victorops, webhook, email, opsgenie, pagerduty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#type AlertChannel#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#config AlertChannel#config}
  */
  readonly config?: AlertChannelConfigA;
}
export interface AlertChannelConfigA {
  /**
  * The API key for integrating with OpsGenie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#api_key AlertChannel#api_key}
  */
  readonly apiKey?: string;
  /**
  * Specifies an authentication password for use with a channel. Supported by the webhook channel type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#auth_password AlertChannel#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Specifies an authentication method for use with a channel. Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#auth_type AlertChannel#auth_type}
  */
  readonly authType?: string;
  /**
  * Specifies an authentication username for use with a channel. Supported by the webhook channel type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#auth_username AlertChannel#auth_username}
  */
  readonly authUsername?: string;
  /**
  * The base URL of the webhook destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#base_url AlertChannel#base_url}
  */
  readonly baseUrl?: string;
  /**
  * The Slack channel to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#channel AlertChannel#channel}
  */
  readonly channel?: string;
  /**
  * A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#headers AlertChannel#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#headers_string AlertChannel#headers_string}
  */
  readonly headersString?: string;
  /**
  * true or false. Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#include_json_attachment AlertChannel#include_json_attachment}
  */
  readonly includeJsonAttachment?: string;
  /**
  * The key for integrating with VictorOps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#key AlertChannel#key}
  */
  readonly key?: string;
  /**
  * A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#payload AlertChannel#payload}
  */
  readonly payload?: { [key: string]: string };
  /**
  * Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#payload_string AlertChannel#payload_string}
  */
  readonly payloadString?: string;
  /**
  * Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#payload_type AlertChannel#payload_type}
  */
  readonly payloadType?: string;
  /**
  * A set of recipients for targeting notifications. Multiple values are comma separated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#recipients AlertChannel#recipients}
  */
  readonly recipients?: string;
  /**
  * The data center region to store your data. Valid values are US and EU. Default is US.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#region AlertChannel#region}
  */
  readonly region?: string;
  /**
  * The route key for integrating with VictorOps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#route_key AlertChannel#route_key}
  */
  readonly routeKey?: string;
  /**
  * Specifies the service key for integrating with Pagerduty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#service_key AlertChannel#service_key}
  */
  readonly serviceKey?: string;
  /**
  * A set of tags for targeting notifications. Multiple values are comma separated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#tags AlertChannel#tags}
  */
  readonly tags?: string;
  /**
  * A set of teams for targeting notifications. Multiple values are comma separated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#teams AlertChannel#teams}
  */
  readonly teams?: string;
  /**
  * Your organization's Slack URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#url AlertChannel#url}
  */
  readonly url?: string;
  /**
  * The user ID for use with the user channel type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#user_id AlertChannel#user_id}
  */
  readonly userId?: string;
}

export function alertChannelConfigAToTerraform(struct?: AlertChannelConfigAOutputReference | AlertChannelConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    headers_string: cdktf.stringToTerraform(struct!.headersString),
    include_json_attachment: cdktf.stringToTerraform(struct!.includeJsonAttachment),
    key: cdktf.stringToTerraform(struct!.key),
    payload: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.payload),
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


export function alertChannelConfigAToHclTerraform(struct?: AlertChannelConfigAOutputReference | AlertChannelConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_username: {
      value: cdktf.stringToHclTerraform(struct!.authUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    headers_string: {
      value: cdktf.stringToHclTerraform(struct!.headersString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_json_attachment: {
      value: cdktf.stringToHclTerraform(struct!.includeJsonAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.payload),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    payload_string: {
      value: cdktf.stringToHclTerraform(struct!.payloadString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_type: {
      value: cdktf.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.stringToHclTerraform(struct!.recipients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_key: {
      value: cdktf.stringToHclTerraform(struct!.routeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    teams: {
      value: cdktf.stringToHclTerraform(struct!.teams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertChannelConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertChannelConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._authUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsername = this._authUsername;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._headersString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersString = this._headersString;
    }
    if (this._includeJsonAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeJsonAttachment = this._includeJsonAttachment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._payloadString !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadString = this._payloadString;
    }
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._routeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeKey = this._routeKey;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertChannelConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._authPassword = undefined;
      this._authType = undefined;
      this._authUsername = undefined;
      this._baseUrl = undefined;
      this._channel = undefined;
      this._headers = undefined;
      this._headersString = undefined;
      this._includeJsonAttachment = undefined;
      this._key = undefined;
      this._payload = undefined;
      this._payloadString = undefined;
      this._payloadType = undefined;
      this._recipients = undefined;
      this._region = undefined;
      this._routeKey = undefined;
      this._serviceKey = undefined;
      this._tags = undefined;
      this._teams = undefined;
      this._url = undefined;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._authPassword = value.authPassword;
      this._authType = value.authType;
      this._authUsername = value.authUsername;
      this._baseUrl = value.baseUrl;
      this._channel = value.channel;
      this._headers = value.headers;
      this._headersString = value.headersString;
      this._includeJsonAttachment = value.includeJsonAttachment;
      this._key = value.key;
      this._payload = value.payload;
      this._payloadString = value.payloadString;
      this._payloadType = value.payloadType;
      this._recipients = value.recipients;
      this._region = value.region;
      this._routeKey = value.routeKey;
      this._serviceKey = value.serviceKey;
      this._tags = value.tags;
      this._teams = value.teams;
      this._url = value.url;
      this._userId = value.userId;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // headers_string - computed: false, optional: true, required: false
  private _headersString?: string; 
  public get headersString() {
    return this.getStringAttribute('headers_string');
  }
  public set headersString(value: string) {
    this._headersString = value;
  }
  public resetHeadersString() {
    this._headersString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersStringInput() {
    return this._headersString;
  }

  // include_json_attachment - computed: false, optional: true, required: false
  private _includeJsonAttachment?: string; 
  public get includeJsonAttachment() {
    return this.getStringAttribute('include_json_attachment');
  }
  public set includeJsonAttachment(value: string) {
    this._includeJsonAttachment = value;
  }
  public resetIncludeJsonAttachment() {
    this._includeJsonAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeJsonAttachmentInput() {
    return this._includeJsonAttachment;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: { [key: string]: string }; 
  public get payload() {
    return this.getStringMapAttribute('payload');
  }
  public set payload(value: { [key: string]: string }) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // payload_string - computed: false, optional: true, required: false
  private _payloadString?: string; 
  public get payloadString() {
    return this.getStringAttribute('payload_string');
  }
  public set payloadString(value: string) {
    this._payloadString = value;
  }
  public resetPayloadString() {
    this._payloadString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadStringInput() {
    return this._payloadString;
  }

  // payload_type - computed: false, optional: true, required: false
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  public resetPayloadType() {
    this._payloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string; 
  public get recipients() {
    return this.getStringAttribute('recipients');
  }
  public set recipients(value: string) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // route_key - computed: false, optional: true, required: false
  private _routeKey?: string; 
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string) {
    this._routeKey = value;
  }
  public resetRouteKey() {
    this._routeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey;
  }

  // service_key - computed: false, optional: true, required: false
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  public resetServiceKey() {
    this._serviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string; 
  public get teams() {
    return this.getStringAttribute('teams');
  }
  public set teams(value: string) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel newrelic_alert_channel}
*/
export class AlertChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_alert_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertChannel to import
  * @param importFromId The id of the existing AlertChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_alert_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.0/docs/resources/alert_channel newrelic_alert_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelConfig
  */
  public constructor(scope: Construct, id: string, config: AlertChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_channel',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.60.0',
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
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._config.internalValue = config.config;
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
    return this._type;
  }

  // config - computed: false, optional: true, required: false
  private _config = new AlertChannelConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AlertChannelConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      config: alertChannelConfigAToTerraform(this._config.internalValue),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: alertChannelConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertChannelConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
