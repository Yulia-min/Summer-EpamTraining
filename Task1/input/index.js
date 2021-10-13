const categoriesSelect = document.getElementById('categories');
const titlesSelect = document.getElementById('titles');
const fullinfo = document.getElementById('fullinfo');

let entries = [];

function loadSelect(select, list) {
  select.innerHTML = '';
  const options = list.map(el => new Option(el));
  options.forEach( o => select.appendChild(o));
}

function getCategories() {
  return fetch('https://api.publicapis.org/categories').then(data =>{
    return data.json();
  })
}

function getEntries(category) {
  return fetch(`https://api.publicapis.org/entries?category=${category}&https=true`).then(data=>{
    return data.json().then(dataJSON=>{
      return entries = dataJSON.entries
    })
  })
}

function categoriesChange(){
  const category = this.value;
   return getEntries(category).then(entries =>{
    const titles = entries.map(entry => entry.API);
    loadSelect(titlesSelect, titles);
   })
}

function init() {
  categoriesSelect.addEventListener('change', categoriesChange);
   return getCategories().then((getCategory)=>{
    loadSelect(categoriesSelect, getCategory);
    categoriesChange.call(categoriesSelect);
   })
}

init();