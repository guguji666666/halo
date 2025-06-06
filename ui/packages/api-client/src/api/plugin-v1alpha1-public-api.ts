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
 * PluginV1alpha1PublicApi - axios parameter creator
 * @export
 */
export const PluginV1alpha1PublicApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets plugin available by name.
         * @param {string} name Plugin name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPluginAvailableByName: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('queryPluginAvailableByName', 'name', name)
            const localVarPath = `/apis/api.plugin.halo.run/v1alpha1/plugins/{name}/available`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
    }
};

/**
 * PluginV1alpha1PublicApi - functional programming interface
 * @export
 */
export const PluginV1alpha1PublicApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PluginV1alpha1PublicApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets plugin available by name.
         * @param {string} name Plugin name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryPluginAvailableByName(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryPluginAvailableByName(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PluginV1alpha1PublicApi.queryPluginAvailableByName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PluginV1alpha1PublicApi - factory interface
 * @export
 */
export const PluginV1alpha1PublicApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PluginV1alpha1PublicApiFp(configuration)
    return {
        /**
         * Gets plugin available by name.
         * @param {PluginV1alpha1PublicApiQueryPluginAvailableByNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPluginAvailableByName(requestParameters: PluginV1alpha1PublicApiQueryPluginAvailableByNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.queryPluginAvailableByName(requestParameters.name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for queryPluginAvailableByName operation in PluginV1alpha1PublicApi.
 * @export
 * @interface PluginV1alpha1PublicApiQueryPluginAvailableByNameRequest
 */
export interface PluginV1alpha1PublicApiQueryPluginAvailableByNameRequest {
    /**
     * Plugin name
     * @type {string}
     * @memberof PluginV1alpha1PublicApiQueryPluginAvailableByName
     */
    readonly name: string
}

/**
 * PluginV1alpha1PublicApi - object-oriented interface
 * @export
 * @class PluginV1alpha1PublicApi
 * @extends {BaseAPI}
 */
export class PluginV1alpha1PublicApi extends BaseAPI {
    /**
     * Gets plugin available by name.
     * @param {PluginV1alpha1PublicApiQueryPluginAvailableByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginV1alpha1PublicApi
     */
    public queryPluginAvailableByName(requestParameters: PluginV1alpha1PublicApiQueryPluginAvailableByNameRequest, options?: RawAxiosRequestConfig) {
        return PluginV1alpha1PublicApiFp(this.configuration).queryPluginAvailableByName(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }
}

