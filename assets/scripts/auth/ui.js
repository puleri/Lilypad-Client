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
const onPostNoteSuccess = function () {
  $('#message').text('Created new note!')
}
const onPostNoteFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onShowNoteSuccess = function (res) {
  const note = res.note
  $('#note-display').html('')

  const noteHTML = (`
    <h4>Title: ${note.title}</h4>
    <p>Body: ${note.body}</p>
    <br>
  `)

  $('#note-display').html(noteHTML)
  $('#show-note').trigger('reset')
}
const onShowNoteFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onIndexNotesSuccess = function (res) {
  console.log('response is ', res)
  const notes = res.notes

  $('#note-display').html('')
  notes.forEach(function (currentNote) {
    const noteHTML = (`
    <h4>Title: ${currentNote.title}</h4>
    <p>Body: ${currentNote.body}</p>
    <p>Owner: ${currentNote.owner.email}</p>
    <p>ID: ${currentNote.owner._id}
    <br>
    `)
    $('#note-display').append(noteHTML)
  })
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onPostNoteSuccess,
  onPostNoteFailure,
  onShowNoteSuccess,
  onShowNoteFailure,
  onIndexNotesSuccess
}
