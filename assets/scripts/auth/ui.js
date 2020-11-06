'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up').trigger('reset')
}
const onSignUpFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onSignInSuccess = function (response) {
  $('#message').text('You are now signed in ' + response.user.email)
  $('#sign-in').trigger('reset')
  store.user = response.user
}
const onSignInFailure = function (error) {
  // console.log(error)
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onChangePasswordSuccess = function () {
  $('#message').text('You have successfully changed your password')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onSignOutSuccess = function () {
  $('#message').text('You are now signed out!')
}
const onSignOutFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
