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


// May contain unused imports in some cases
// @ts-ignore
import { Role } from './role';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * A chunk of items.
 * @export
 * @interface ListedUser
 */
export interface ListedUser {
    /**
     * 
     * @type {Array<Role>}
     * @memberof ListedUser
     */
    'roles': Array<Role>;
    /**
     * 
     * @type {User}
     * @memberof ListedUser
     */
    'user': User;
}

