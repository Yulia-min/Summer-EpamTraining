const th = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');
const row = Array.from(tbody.rows);
const input = document.createElement('input');

[].forEach.call(th, function (th, elem) {
  th.addEventListener('click', function () {
    sort(elem);
  });
});

tbody.addEventListener('click', cellClick)

function sort(elem) {

  let compare = function (rowA, rowB) {
    return rowA.cells[elem].innerHTML > rowB.cells[elem].innerHTML ? 1 :
      rowA.cells[elem].innerHTML < rowB.cells[elem].innerHTML ? -1 : 0;
  };

  row.sort(compare);
  tbody.append(...row);
}

function cellClick(event) { 
  if (event.target.tagName === 'TD') {
    input.type = 'text';
    input.value = event.target.innerHTML;
    input.addEventListener('blur', function(){
      this.parentElement.textContent = this.value;
      this.removeEventListener('blur', inputEvent);
    });

    event.target.textContent = '';
    event.target.appendChild(input);

    input.focus();
  }
}
