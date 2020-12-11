'use strict';

const ghURL = 'https://api.github.com/users/'

function fetchURL(userURL) {
  fetch(userURL)
  .then(response => response.json())
  .then(data => createList(data))
  .catch(error => console.error(error));
}

function createList(data) {
  $('#results').html(`<h2>Results:</h2>`)
  for (let i=0; i < data.length; i++) {
    $('#results').append(`<a href="${data[i].html_url}">${data[i].html_url}</a>`)
  }
}

function makeURL(user) {
  const userURL = ghURL + user + '/repos'
  console.log(userURL)
  fetchURL(userURL)
}

function watchInput() {
  $('form').submit(event => {
  event.preventDefault()
  const user = $('#search').val()
  console.log(user)
  makeURL(user)
  })
}

$(watchInput)