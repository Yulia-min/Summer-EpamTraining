export function loadSelect(select, list) {
    select.innerHTML = '';
    const options = list.map(el => new Option(el));
    options.forEach( o => select.appendChild(o));
  }