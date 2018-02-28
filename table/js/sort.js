'use strict';
function handleTableClick(event) {
  if (event.target.dataset.dir === '-1') {
    event.target.setAttribute('data-dir', '1');
  } else {
     event.target.setAttribute('data-dir', '-1');
  }
  event.currentTarget.setAttribute('data-sort-by', event.target.dataset.propName);
  sortTable(event.target.dataset.propName, event.target.dataset.dir);
}