"use strict";

var categoriesSelect = document.getElementById('categories');
var titlesSelect = document.getElementById('titles');
var fullinfo = document.getElementById('fullinfo');
var entries = [];

function loadSelect(select, list) {
  select.innerHTML = '';
  var options = list.map(function (el) {
    return new Option(el);
  });
  options.forEach(function (o) {
    return select.appendChild(o);
  });
}

function getCategories() {
  return fetch('https://api.publicapis.org/categories').then(function (data) {
    return data.json();
  });
}

function getEntries(category) {
  return fetch("https://api.publicapis.org/entries?category=".concat(category, "&https=true")).then(function (data) {
    return data.json().then(function (dataJSON) {
      return entries = dataJSON.entries;
    });
  });
}

function categoriesChange() {
  var category = this.value;
  return getEntries(category).then(function (entries) {
    var titles = entries.map(function (entry) {
      return entry.API;
    });
    loadSelect(titlesSelect, titles);
  });
}

function init() {
  categoriesSelect.addEventListener('change', categoriesChange);
  return getCategories().then(function (getCategory) {
    loadSelect(categoriesSelect, getCategory);
    categoriesChange.call(categoriesSelect);
  });
}

init();