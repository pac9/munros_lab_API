const Munros = require('./models/munros.js')
const MunrosView = require('./views/munros_view.js')
document.addEventListener('DOMContentLoaded', () => {
  const munrosList = document.querySelector('#munros')
  const munros = new Munros('https://munroapi.herokuapp.com/api/munros')
  munros.getData();
  const munrosView = new MunrosView(munrosList);
  munrosView.bindEvents();
})
