'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#post-note').on('submit', events.onPostNote)
  $('#update-note').on('submit', events.onUpdateNote)
  $('#show-note').on('submit', events.onShowNote)
  $('#index-notes').on('submit', events.onIndexNotes)
  $('#delete-note').on('submit', events.onDeleteNote)
  $('#has-account').on('click', events.showSignIn)
  $('#no-account').on('click', events.showSignUp)
})
