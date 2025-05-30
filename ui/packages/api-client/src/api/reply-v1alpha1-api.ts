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
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { Reply } from '../models';
// @ts-ignore
import { ReplyList } from '../models';
/**
 * ReplyV1alpha1Api - axios parameter creator
 * @export
 */
export const ReplyV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create Reply
         * @param {Reply} [reply] Fresh reply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReply: async (reply?: Reply, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/replies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(reply, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete Reply
         * @param {string} name Name of reply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReply: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteReply', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/replies/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Get Reply
         * @param {string} name Name of reply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReply: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getReply', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/replies/{name}`
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
        /**
         * List Reply
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listReply: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/replies`;
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch Reply
         * @param {string} name Name of reply
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchReply: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchReply', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/replies/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update Reply
         * @param {string} name Name of reply
         * @param {Reply} [reply] Updated reply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateReply: async (name: string, reply?: Reply, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateReply', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/replies/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(reply, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReplyV1alpha1Api - functional programming interface
 * @export
 */
export const ReplyV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReplyV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create Reply
         * @param {Reply} [reply] Fresh reply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReply(reply?: Reply, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createReply(reply, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReplyV1alpha1Api.createReply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete Reply
         * @param {string} name Name of reply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteReply(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteReply(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReplyV1alpha1Api.deleteReply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Reply
         * @param {string} name Name of reply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReply(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReply(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReplyV1alpha1Api.getReply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List Reply
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listReply(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReplyList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listReply(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReplyV1alpha1Api.listReply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch Reply
         * @param {string} name Name of reply
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchReply(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchReply(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReplyV1alpha1Api.patchReply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update Reply
         * @param {string} name Name of reply
         * @param {Reply} [reply] Updated reply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateReply(name: string, reply?: Reply, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reply>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateReply(name, reply, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReplyV1alpha1Api.updateReply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ReplyV1alpha1Api - factory interface
 * @export
 */
export const ReplyV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReplyV1alpha1ApiFp(configuration)
    return {
        /**
         * Create Reply
         * @param {ReplyV1alpha1ApiCreateReplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReply(requestParameters: ReplyV1alpha1ApiCreateReplyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Reply> {
            return localVarFp.createReply(requestParameters.reply, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete Reply
         * @param {ReplyV1alpha1ApiDeleteReplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReply(requestParameters: ReplyV1alpha1ApiDeleteReplyRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteReply(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Reply
         * @param {ReplyV1alpha1ApiGetReplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReply(requestParameters: ReplyV1alpha1ApiGetReplyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Reply> {
            return localVarFp.getReply(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List Reply
         * @param {ReplyV1alpha1ApiListReplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listReply(requestParameters: ReplyV1alpha1ApiListReplyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ReplyList> {
            return localVarFp.listReply(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch Reply
         * @param {ReplyV1alpha1ApiPatchReplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchReply(requestParameters: ReplyV1alpha1ApiPatchReplyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Reply> {
            return localVarFp.patchReply(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update Reply
         * @param {ReplyV1alpha1ApiUpdateReplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateReply(requestParameters: ReplyV1alpha1ApiUpdateReplyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Reply> {
            return localVarFp.updateReply(requestParameters.name, requestParameters.reply, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createReply operation in ReplyV1alpha1Api.
 * @export
 * @interface ReplyV1alpha1ApiCreateReplyRequest
 */
export interface ReplyV1alpha1ApiCreateReplyRequest {
    /**
     * Fresh reply
     * @type {Reply}
     * @memberof ReplyV1alpha1ApiCreateReply
     */
    readonly reply?: Reply
}

/**
 * Request parameters for deleteReply operation in ReplyV1alpha1Api.
 * @export
 * @interface ReplyV1alpha1ApiDeleteReplyRequest
 */
export interface ReplyV1alpha1ApiDeleteReplyRequest {
    /**
     * Name of reply
     * @type {string}
     * @memberof ReplyV1alpha1ApiDeleteReply
     */
    readonly name: string
}

/**
 * Request parameters for getReply operation in ReplyV1alpha1Api.
 * @export
 * @interface ReplyV1alpha1ApiGetReplyRequest
 */
export interface ReplyV1alpha1ApiGetReplyRequest {
    /**
     * Name of reply
     * @type {string}
     * @memberof ReplyV1alpha1ApiGetReply
     */
    readonly name: string
}

/**
 * Request parameters for listReply operation in ReplyV1alpha1Api.
 * @export
 * @interface ReplyV1alpha1ApiListReplyRequest
 */
export interface ReplyV1alpha1ApiListReplyRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ReplyV1alpha1ApiListReply
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ReplyV1alpha1ApiListReply
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ReplyV1alpha1ApiListReply
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ReplyV1alpha1ApiListReply
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ReplyV1alpha1ApiListReply
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchReply operation in ReplyV1alpha1Api.
 * @export
 * @interface ReplyV1alpha1ApiPatchReplyRequest
 */
export interface ReplyV1alpha1ApiPatchReplyRequest {
    /**
     * Name of reply
     * @type {string}
     * @memberof ReplyV1alpha1ApiPatchReply
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof ReplyV1alpha1ApiPatchReply
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateReply operation in ReplyV1alpha1Api.
 * @export
 * @interface ReplyV1alpha1ApiUpdateReplyRequest
 */
export interface ReplyV1alpha1ApiUpdateReplyRequest {
    /**
     * Name of reply
     * @type {string}
     * @memberof ReplyV1alpha1ApiUpdateReply
     */
    readonly name: string

    /**
     * Updated reply
     * @type {Reply}
     * @memberof ReplyV1alpha1ApiUpdateReply
     */
    readonly reply?: Reply
}

/**
 * ReplyV1alpha1Api - object-oriented interface
 * @export
 * @class ReplyV1alpha1Api
 * @extends {BaseAPI}
 */
export class ReplyV1alpha1Api extends BaseAPI {
    /**
     * Create Reply
     * @param {ReplyV1alpha1ApiCreateReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReplyV1alpha1Api
     */
    public createReply(requestParameters: ReplyV1alpha1ApiCreateReplyRequest = {}, options?: RawAxiosRequestConfig) {
        return ReplyV1alpha1ApiFp(this.configuration).createReply(requestParameters.reply, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete Reply
     * @param {ReplyV1alpha1ApiDeleteReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReplyV1alpha1Api
     */
    public deleteReply(requestParameters: ReplyV1alpha1ApiDeleteReplyRequest, options?: RawAxiosRequestConfig) {
        return ReplyV1alpha1ApiFp(this.configuration).deleteReply(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Reply
     * @param {ReplyV1alpha1ApiGetReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReplyV1alpha1Api
     */
    public getReply(requestParameters: ReplyV1alpha1ApiGetReplyRequest, options?: RawAxiosRequestConfig) {
        return ReplyV1alpha1ApiFp(this.configuration).getReply(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List Reply
     * @param {ReplyV1alpha1ApiListReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReplyV1alpha1Api
     */
    public listReply(requestParameters: ReplyV1alpha1ApiListReplyRequest = {}, options?: RawAxiosRequestConfig) {
        return ReplyV1alpha1ApiFp(this.configuration).listReply(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch Reply
     * @param {ReplyV1alpha1ApiPatchReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReplyV1alpha1Api
     */
    public patchReply(requestParameters: ReplyV1alpha1ApiPatchReplyRequest, options?: RawAxiosRequestConfig) {
        return ReplyV1alpha1ApiFp(this.configuration).patchReply(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update Reply
     * @param {ReplyV1alpha1ApiUpdateReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReplyV1alpha1Api
     */
    public updateReply(requestParameters: ReplyV1alpha1ApiUpdateReplyRequest, options?: RawAxiosRequestConfig) {
        return ReplyV1alpha1ApiFp(this.configuration).updateReply(requestParameters.name, requestParameters.reply, options).then((request) => request(this.axios, this.basePath));
    }
}

