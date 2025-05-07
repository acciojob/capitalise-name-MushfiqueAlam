//your JS code here. If required.
const fname=document.querySelector('#fname');

fname.addEventListener('blur', (e) => {
  e.target.value = e.target.value.toUpperCase();

});