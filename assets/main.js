
var html = "";
var arr = [];
var nameDiv = document.getElementById('name');


var data = fetch("data.json")
.then(response => response.json())
.then(sdata => {
  for (const i in sdata) {
    arr.push(sdata[i]);
  }


  
  setInterval(() => {
    
    var randomData =arr[Math.floor( Math.floor(Math.random()*arr.length))];
      html = `<h2>${randomData.name}</h2>
      <span>${randomData.soz}</span>`;
      nameDiv.innerHTML = html;
  }, 5000);


})



