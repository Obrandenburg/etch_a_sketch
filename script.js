
const container = document.querySelector(".container");
const slider = document.getElementById("myRange");
const dimensions = document.getElementById('dimensions');
const button = document.querySelector('button');
let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');





function launch(){
  for (let i=0; i<256; ++i){
    const div = document.createElement("div");
      container.appendChild(div);
      div.classList.add("gridDiv");
  };
};


function removeKids(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};





window.addEventListener('load', launch);


slider.addEventListener('input', function(){
  removeKids(container);
  let num = slider.value;
  dimensions.textContent = num;
  container.style.gridTemplateColumns = `repeat(${num}, 2fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 2fr)`;
  let gridArea = (num) * (num);
  for (i=0; i<gridArea; ++i){
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('gridDiv');
  };
  });



container.addEventListener('mouseover', (e) => {
if (e.target.matches ('.gridDiv')){
  e.target.style.backgroundColor = `black`;
}
});


button.addEventListener('click', () => {
  const cells = document.querySelectorAll('.gridDiv');
  cells.forEach((cell) => cell.style.backgroundColor = 'white')
});
  







  

















