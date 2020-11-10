'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onSignOut = function (data) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const onPostNote = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.postNote(data)
    .then(ui.onPostNoteSuccess)
    .catch(ui.onPostNoteFailure)
}
const onShowNote = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.showNote(formData)
    .then(ui.onShowNoteSuccess)
    .catch(ui.onShowNoteFailure)
}
const onDeleteNote = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.deleteNote(formData)
    .then(ui.onDeleteNoteSuccess)
    .catch(ui.onShowNoteFailure)
}

const onIndexNotes = function (event) {
  event.preventDefault()

  api.indexNotes()
    .then(ui.onIndexNotesSuccess)
    .catch(ui.onIndexNotesError)
}
const showSignIn = function (event) {
  $('#sign-in').css('display', 'block')
  $('#sign-up').css('display', 'none')
  $('h4').css('display', 'none')
  $('#has-account').css('display', 'none')
  $('#no-account').css('display', 'block')
  $('#message').text('')
}
const showSignUp = function (event) {
  $('#sign-in').css('display', 'none')
  $('#sign-up').css('display', 'block')
  $('h4').css('display', 'block')
  $('#has-account').css('display', 'block')
  $('#no-account').css('display', 'none')
  $('#message').text('')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onPostNote,
  onShowNote,
  onDeleteNote,
  onIndexNotes,
  showSignIn,
  showSignUp
}
