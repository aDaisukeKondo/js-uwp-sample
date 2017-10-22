import moment from 'moment'

(() => {
  const m = moment();

  console.log(m);

  const e = document.getElementById('main');
  e.innerHTML = m.toString();
})();

