let body = document.querySelector('body');
let div=document.createElement('div');
let div1 = document.createElement('div1');  // It will create dynamic div , div1 tag
div1.innerHTML=`<div class="container mt-5 ">
<div class="row">
  <div class="col-md-6 m-auto">
    
      <h1 class="cardDesign"> NATIONALIZE API </h1>    
    </div>  
  
  

</div>
</div>`

// It will create Dynamic Button tag

div.innerHTML=`<div class="container border 2px m-5 p-5 bg-light shadow">
<div class="row ">
    <div class="col-md-6">
      <div class="col-md-10">
        <input type="text" class="form-control mt-5" id="inputName" placeholder="Enter Your Name">
    </div>
  </div>
    <div class="col-md-6">
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary mt-5 submit" onclick="Namefetching()">Submit</button>
      </div>
    </div>

</div>

<div class="container-fluid grid div2" id="division2">

</div>

</div>`

// Displays div1 , div content in document screen.

body.append(div1);
body.append(div);

async function Namefetching(){
  try{
    let id= document.getElementById('inputName').value;
 
      let value = await fetch(`https://api.nationalize.io/?name[]=${id}`)    
      // It will display output in json format
    let api=await value.json()
   
   
// Code to displays the output in CARD Format

let div2=document.getElementById('division2')
div2.innerHTML=`<div class="card m-auto border bg-light shadow" style="width: 18rem;">
<img src="https://assignmentpoint.com/wp-content/uploads/2020/07/Nationalization.jpg" class="card-img-top" alt="...">
<div class="card-body">
<p class="card-text">countryname:<mark class="highlight">${id}</mark></p>
  <p class="card-text">CountryName 1:${ api[0].country[0].country_id}</p>
  <p class="card-text">CountryName 2:${ api[0].country[1].country_id}</p>
  <p class="card-text">ProbabilityValue 1:${ api[0].country[0].probability}</p>
  <p class="card-text">ProbabilityValue 2:${ api[0].country[1].probability}</p>
  
</div>
</div>`
  }
  catch(err){
console.log(error)
  }
}