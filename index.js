// first card
document.getElementById("first-card").addEventListener("click", function () {
    
    const productName = document.getElementById("first-title").innerText;
    const productPrice = document.getElementById("first-input").value;
    const productQuantity = document.getElementById("second-input").value;
    const producttotal= 0.5*productPrice*productQuantity;
    console.log(productName,producttotal);
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${productName}</td>
      <td>${producttotal.toFixed(2)}</td>
      <td>
       <button class="btn btn-primary">convert to m</button>
      </td>
    
      
      
    `;
    container.appendChild(tr);

});
// second card
document.getElementById("second-card").addEventListener("click", function () {
    
  const recName = document.getElementById("second-title").innerText;
  const recPrice = document.getElementById("rec1-input").value;
  const recQuantity = document.getElementById("rec2-input").value;
  const rectotal= recPrice*recQuantity;
  console.log(recName,rectotal);
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${recName}</td>
    <td>${rectotal.toFixed(2)}</td>
    <td>
    <button class="btn btn-primary">convert to m</button>
    </td>
    
    
  `;
  container.appendChild(tr);

});
// third card
document.getElementById("third-card").addEventListener("click", function () {
    
  const paraName = document.getElementById("third-title").innerText;
  const paraPrice = document.getElementById("para1-input").value;
  const paraQuantity = document.getElementById("para2-input").value;
  const paratotal= paraPrice*paraQuantity;
  console.log(paraName,paratotal);
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${paraName}</td>
    <td>${paratotal.toFixed(2)}</td>
    <td>
      <button class="btn btn-primary">convert to m</button>
    </td>
    
    
  `;
  container.appendChild(tr);

});
// fourth card
document.getElementById("fourth-card").addEventListener("click", function () {
    
  const rhomName = document.getElementById("fourth-title").innerText;
  const rhomPrice = document.getElementById("rhom1-input").value;
  const rhomQuantity = document.getElementById("rhom2-input").value;
  const rhomtotal= 0.5*rhomPrice*rhomQuantity;
  console.log(rhomName,rhomtotal);
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${rhomName}</td>
    <td>${rhomtotal.toFixed(2)}</td>
    <td>
     <button class="btn btn-primary">convert to m</button>
    </td>
  
    
    
  `;
  container.appendChild(tr);

});
// fifth card
document.getElementById("fifth-card").addEventListener("click", function () {
    
  const pentaName = document.getElementById("fifth-title").innerText;
  const pentaPrice = document.getElementById("penta1-input").value;
  const pentaQuantity = document.getElementById("penta2-input").value;
  const pentatotal= 0.5*pentaPrice*pentaQuantity;
  console.log(pentaName,pentatotal);
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${pentaName}</td>
    <td>${pentatotal.toFixed(2)}</td>
    <td>
     <button class="btn btn-primary">convert to m</button>
    </td>
  
    
    
  `;
  container.appendChild(tr);

});
//  last card 
document.getElementById("last-card").addEventListener("click", function () {
    
  const elloName = document.getElementById("last-title").innerText;
  const elloPrice = document.getElementById("ello1-input").value;
  const elloQuantity = document.getElementById("ello2-input").value;
  const ellototal= 3.1416*elloPrice*elloQuantity;
  console.log(elloName,ellototal);
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${elloName}</td>
    <td>${ellototal.toFixed(2)}</td>
    <td>
     <button class="btn btn-primary">convert to m</button>
    </td>
  
    
    
  `;
  container.appendChild(tr);

}); 




