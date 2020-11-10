'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up').trigger('reset')
  $('#sign-in').css('display', 'block')
  $('#sign-up').css('display', 'none')
  $('#has-account').css('display', 'none')
  $('#no-account').css('display', 'block')
}
const onSignUpFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onSignInSuccess = function (response) {
  $('#message').text('You are now signed in ' + response.user.email)
  $('#sign-in').trigger('reset')
  $('#notes-div').css('display', 'block')
  $('#sign-in').css('display', 'none')
  $('#sign-out').css('display', 'block')
  $('#no-account').css('display', 'none')
  $('.show-change-password').css('display', 'block')
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
  $('.show-change-password').css('display', 'none')
  $('#sign-in').css('display', 'block')
  $('#no-account').css('display', 'block')
  $('#sign-out').css('display', 'none')
  $('#notes-div').css('display', 'none')
  $('#note-display').text('')
}
const onSignOutFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onPostNoteSuccess = function () {
  $('#message').text('Created new note!')
  $('#post-note').trigger('reset')
}
const onPostNoteFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onUpdateSuccess = function () {
  $('#note-display').text('The note has been updated. Check it out!')
  $('form').trigger('reset')
}
const onUpdateFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onShowNoteSuccess = function (res) {
  // console.log('res is ', res)
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
  // console.log('Show note error!')
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onDeleteNoteSuccess = function () {
  $('#message').text('Note deleted!')
  $('#delete-note').trigger('reset')
}
const onIndexNotesSuccess = function (res) {
  // console.log('response is ', res)
  const notes = res.notes

  $('#note-display').html('')
  notes.forEach(function (currentNote) {
    const noteHTML = (`
    <h4>Title: ${currentNote.title}</h4>
    <p>Body: ${currentNote.body}</p>
    <p>Owner: ${currentNote.owner.email}</p>
    <p>ID: ${currentNote._id}
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
  onDeleteNoteSuccess,
  onIndexNotesSuccess,
  onUpdateSuccess,
  onUpdateFailure
}
