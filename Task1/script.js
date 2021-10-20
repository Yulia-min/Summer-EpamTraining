import { loadSelect } from "./module/loadSelect.js";
import { getEntries } from "./module/getEntries.js";

const categoriesSelect = document.getElementById('categories');
const titlesSelect = document.getElementById('titles');
const fullinfo = document.getElementById('fullinfo');

let entries = [];

function showInfo(title) {
  const entry = entries.find(e => e.API === title);
  fullinfo.innerHTML = Object.entries(entry).map((e)=>`${e[0]}: ${e[1]}`).join('\n');
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

async function categoriesChange() {
  const category = this.value;
  entries = await getEntries(category);

  const titles = entries.map(entry => entry.API);

  loadSelect(titlesSelect, titles);
  showInfo(titles[0]);
}

async function titlesChange() {
  const title = this.value;
  
  showInfo(title);
}

async function init() {
  categoriesSelect.addEventListener('change', categoriesChange);
  titlesSelect.addEventListener('change', titlesChange);

  loadSelect(categoriesSelect, await getCategories());
  categoriesChange.call(categoriesSelect);
}

async function load() {
  let click = await import('./module/clickHandler.js');
  click.clickHandler();
}

load();
init();