'use strict'
const store = require('../store')
const config = require('./../config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const postNote = function (data) {
  return $.ajax({
    url: config.apiUrl + '/notes',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
const showNote = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/notes/' + formData.note.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}
const updateNote = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/notes/' + formData.note.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}
const deleteNote = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/notes/' + formData.note.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}
const indexNotes = function () {
  return $.ajax({
    url: config.apiUrl + '/notes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  postNote,
  showNote,
  deleteNote,
  indexNotes,
  updateNote
}
