// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Store apiUrl data in the "local" storage area.
//
// Usually we try to store settings in the "sync" area since a lot of the time
// it will be a better user experience for settings to automatically sync
// between browsers.
//
// However, "sync" is expensive with a strict quota (both in storage space and
// bandwidth) so data that may be as large and updated as frequently as the apiUrl
// may not be suitable.
var storage = chrome.storage.local;

// Get at the DOM controls used in the sample.
var resetButton = document.querySelector('button.reset');
var submitButton = document.querySelector('button.submit');
var textarea = document.querySelector('textarea');

// Load any apiUrl that may have previously been saved.
loadChanges();

submitButton.addEventListener('click', saveChanges);
resetButton.addEventListener('click', reset);

function saveChanges() {
  // Get the current apiUrl snippet from the form.
  var apiUrlCode = textarea.value;
  // Check that there's some code there.
  if (!apiUrlCode) {
    message('Error: No apiUrl specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  storage.set({'apiUrl': apiUrlCode}, function() {
    // Notify that we saved.
    message('Settings saved');
  });
}

function loadChanges() {
  storage.get('apiUrl', function(items) {
    // To avoid checking items.apiUrl we could specify storage.get({apiUrl: ''}) to
    // return a default value of '' if there is no apiUrl value yet.
    if (items.apiUrl) {
      textarea.value = items.apiUrl;
      message('Loaded saved apiUrl.');
    }
  });
}

function reset() {
  // Remove the saved value from storage. storage.clear would achieve the same
  // thing.
  storage.remove('apiUrl', function(items) {
    message('Reset stored apiUrl');
  });
  // Refresh the text area.
  textarea.value = '';
}

function message(msg) {
  var message = document.querySelector('.message');
  message.innerText = msg;
  setTimeout(function() {
    message.innerText = '';
  }, 3000);
}
