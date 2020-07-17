import * as types from "./constants"
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response
})
export const api_v1_customtext_listFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response
})
export const api_v1_customtext_readFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error
})
export const api_v1_customtext_update = () => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE
})
export const api_v1_customtext_updateSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response
})
export const api_v1_customtext_updateFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error
})
export const api_v1_customtext_partial_update = () => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE
})
export const api_v1_customtext_partial_updateSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response
})
export const api_v1_customtext_partial_updateFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response
})
export const api_v1_homepage_listFailed = error => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response
})
export const api_v1_homepage_readFailed = error => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error
})
export const api_v1_homepage_update = () => ({
  type: types.API_V1_HOMEPAGE_UPDATE
})
export const api_v1_homepage_updateSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response
})
export const api_v1_homepage_updateFailed = error => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error
})
export const api_v1_homepage_partial_update = () => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE
})
export const api_v1_homepage_partial_updateSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response
})
export const api_v1_homepage_partial_updateFailed = error => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = response => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response
})
export const api_v1_login_createFailed = error => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error
})
export const api_v1_signup_create = () => ({ type: types.API_V1_SIGNUP_CREATE })
export const api_v1_signup_createSucceeded = response => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response
})
export const api_v1_signup_createFailed = error => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error
})
export const rest_auth_login_create = () => ({
  type: types.REST_AUTH_LOGIN_CREATE
})
export const rest_auth_login_createSucceeded = response => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response
})
export const rest_auth_login_createFailed = error => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = response => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response
})
export const rest_auth_logout_listFailed = error => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = response => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response
})
export const rest_auth_logout_createFailed = error => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error
})
export const rest_auth_password_change_create = () => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE
})
export const rest_auth_password_change_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response
})
export const rest_auth_password_change_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error
})
export const rest_auth_password_reset_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE
})
export const rest_auth_password_reset_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response
})
export const rest_auth_password_reset_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error
})
export const rest_auth_password_reset_confirm_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE
})
export const rest_auth_password_reset_confirm_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response
})
export const rest_auth_password_reset_confirm_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error
})
export const rest_auth_registration_create = () => ({
  type: types.REST_AUTH_REGISTRATION_CREATE
})
export const rest_auth_registration_createSucceeded = response => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response
})
export const rest_auth_registration_createFailed = error => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error
})
export const rest_auth_registration_verify_email_create = () => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE
})
export const rest_auth_registration_verify_email_createSucceeded = response => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response
})
export const rest_auth_registration_verify_email_createFailed = error => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = response => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response
})
export const rest_auth_user_readFailed = error => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error
})
export const rest_auth_user_update = () => ({
  type: types.REST_AUTH_USER_UPDATE
})
export const rest_auth_user_updateSucceeded = response => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response
})
export const rest_auth_user_updateFailed = error => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error
})
export const rest_auth_user_partial_update = () => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE
})
export const rest_auth_user_partial_updateSucceeded = response => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response
})
export const rest_auth_user_partial_updateFailed = error => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error
})
