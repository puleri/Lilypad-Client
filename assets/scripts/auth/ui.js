'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up').trigger('reset')
  $('#sign-in').css('display', 'block')
  $('#sign-up').css('display', 'none')
  $('#has-account').css('display', 'none')
  $('#no-account').css('display', 'block')
  $('.goals').css('display', 'none')
}
const onSignUpFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onSignInSuccess = function (response) {
  $('#username-header').text(response.user.email)
  $('#message').text('')
  $('#sign-in').trigger('reset')
  $('#notes-div').css('display', 'block')
  $('#sign-in').css('display', 'none')
  $('#sign-out').css('display', 'block')
  $('#no-account').css('display', 'none')
  $('#show-change-password').css('display', 'block')
  $('.goals').css('display', 'none')
  store.user = response.user
}
const onSignInFailure = function (error) {
  // console.log(error)
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onChangePasswordSuccess = function () {
  $('#message').text('You have successfully changed your password')
  $('#change-password').trigger('reset')
  $('#show-change-password').css('display', 'block')
  $('#change-password').css('display', 'none')
}
const onChangePasswordFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onSignOutSuccess = function () {
  $('#username-header').text('')
  $('#message').text('You are now signed out!')
  $('.show-change-password').css('display', 'none')
  $('#sign-in').css('display', 'block')
  $('#no-account').css('display', 'block')
  $('#sign-out').css('display', 'none')
  $('#notes-div').css('display', 'none')
  $('#update-note').trigger('reset')
  $('#show-note').trigger('reset')
  $('#post-note').trigger('reset')
  $('#delete-note').trigger('reset')
  $('#change-password').trigger('reset')
  $('#change-password').css('display', 'none')
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
    <div class="box">
    <h6>${note.title}</h6>
    <p class="notes-table">${note.body}</p>
    </div>
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
    const noteHTML =
  (`<div class="box">
    <h6>${currentNote.title}</h6>
    <p>${currentNote.body}</p>
    <p>Owner: ${currentNote.owner.email}</p>
    <p>ID: ${currentNote._id}</p>
    </div>`)
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
