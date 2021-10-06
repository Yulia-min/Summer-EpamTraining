const categoriesSelect = document.getElementById('categories');
const titlesSelect = document.getElementById('titles');
const fullinfo = document.getElementById('fullinfo');

let entries = [];

function loadSelect(select, list) {
  select.innerHTML = '';
  const options = list.map(el => new Option(value=el));
  options.forEach( o => select.appendChild(o));
}

async function getCategories() {
  try {
    const data = await fetch('https://api.publicapis.org/categories');
    const categories = await data.json();

    return categories;
  } catch(error) {
    console.log(error.message);
  }

}

async function getEntries(category) {
  try {
    const data = await fetch(`https://api.publicapis.org/entries?category=${category}&https=true`);
    const dataJSON = await data.json();
    const entries = dataJSON.entries;
    return entries;

  } catch(error) {
    console.log(error.message);
  }
}

async function categoriesChange() {
  const category = this.value;
  entries = await getEntries(category);
  const titles = entries.map(entry => entry.API);
  loadSelect(titlesSelect, titles);
}

async function init() {
    categoriesSelect.addEventListener('change', categoriesChange);

    loadSelect(categoriesSelect, await getCategories());
    categoriesChange.call(categoriesSelect);
}

init();