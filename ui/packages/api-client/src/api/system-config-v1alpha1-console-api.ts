/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.21.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
/**
 * SystemConfigV1alpha1ConsoleApi - axios parameter creator
 * @export
 */
export const SystemConfigV1alpha1ConsoleApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get system config by group
         * @param {string} group Group of the system config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemConfigByGroup: async (group: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'group' is not null or undefined
            assertParamExists('getSystemConfigByGroup', 'group', group)
            const localVarPath = `/apis/console.api.halo.run/v1alpha1/systemconfigs/{group}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update system config by group
         * @param {string} group Group of the system config
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSystemConfigByGroup: async (group: string, body?: object, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'group' is not null or undefined
            assertParamExists('updateSystemConfigByGroup', 'group', group)
            const localVarPath = `/apis/console.api.halo.run/v1alpha1/systemconfigs/{group}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SystemConfigV1alpha1ConsoleApi - functional programming interface
 * @export
 */
export const SystemConfigV1alpha1ConsoleApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SystemConfigV1alpha1ConsoleApiAxiosParamCreator(configuration)
    return {
        /**
         * Get system config by group
         * @param {string} group Group of the system config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemConfigByGroup(group: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemConfigByGroup(group, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemConfigV1alpha1ConsoleApi.getSystemConfigByGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update system config by group
         * @param {string} group Group of the system config
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSystemConfigByGroup(group: string, body?: object, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSystemConfigByGroup(group, body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemConfigV1alpha1ConsoleApi.updateSystemConfigByGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SystemConfigV1alpha1ConsoleApi - factory interface
 * @export
 */
export const SystemConfigV1alpha1ConsoleApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SystemConfigV1alpha1ConsoleApiFp(configuration)
    return {
        /**
         * Get system config by group
         * @param {SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemConfigByGroup(requestParameters: SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getSystemConfigByGroup(requestParameters.group, options).then((request) => request(axios, basePath));
        },
        /**
         * Update system config by group
         * @param {SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSystemConfigByGroup(requestParameters: SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateSystemConfigByGroup(requestParameters.group, requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getSystemConfigByGroup operation in SystemConfigV1alpha1ConsoleApi.
 * @export
 * @interface SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroupRequest
 */
export interface SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroupRequest {
    /**
     * Group of the system config
     * @type {string}
     * @memberof SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroup
     */
    readonly group: string
}

/**
 * Request parameters for updateSystemConfigByGroup operation in SystemConfigV1alpha1ConsoleApi.
 * @export
 * @interface SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroupRequest
 */
export interface SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroupRequest {
    /**
     * Group of the system config
     * @type {string}
     * @memberof SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroup
     */
    readonly group: string

    /**
     * 
     * @type {object}
     * @memberof SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroup
     */
    readonly body?: object
}

/**
 * SystemConfigV1alpha1ConsoleApi - object-oriented interface
 * @export
 * @class SystemConfigV1alpha1ConsoleApi
 * @extends {BaseAPI}
 */
export class SystemConfigV1alpha1ConsoleApi extends BaseAPI {
    /**
     * Get system config by group
     * @param {SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemConfigV1alpha1ConsoleApi
     */
    public getSystemConfigByGroup(requestParameters: SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroupRequest, options?: RawAxiosRequestConfig) {
        return SystemConfigV1alpha1ConsoleApiFp(this.configuration).getSystemConfigByGroup(requestParameters.group, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update system config by group
     * @param {SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemConfigV1alpha1ConsoleApi
     */
    public updateSystemConfigByGroup(requestParameters: SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroupRequest, options?: RawAxiosRequestConfig) {
        return SystemConfigV1alpha1ConsoleApiFp(this.configuration).updateSystemConfigByGroup(requestParameters.group, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

