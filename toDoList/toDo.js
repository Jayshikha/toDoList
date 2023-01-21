const input = document.querySelector('input');
const btn = document.querySelector('.addtask > button');
btn.addEventListener('click', addlist);
// input.addEventListener('keyup',(e)=>{
//   (e.DOM_KEY_LOCATION_NUMPAD===13? addlist(e):null);
// })
function addlist(e) {
  const notcomplited = document.querySelector('.notcomplited');
  const complited = document.querySelector('.complited');
  const newli = document.createElement('li');
  const checkbtn = document.createElement('button');
  const delbtn = document.createElement('button');
  checkbtn.innerHTML = ' <i class="fa fa-check"></i>';
  delbtn.innerHTML = '<i class="fa fa-trash"></i>';
  // if (input.value !=" "){
    newli.textContent = input.value;
    // input.value = ' ';
    notcomplited.appendChild(newli);
    newli.appendChild(checkbtn);
    newli.appendChild(delbtn);

  // }
  checkbtn.addEventListener('click', function () {
    const parent = this.parentNode;
    parent.remove();
    complited.appendChild(parent);
    checkbtn.style.display = 'none';


  });
  delbtn.addEventListener('click', function () {
    const parent = this.parentNode;
    parent.remove();

  });
}