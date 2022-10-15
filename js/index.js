
let search=document.getElementById("search")
let one=document.getElementById("one")

async function getBusiness(country) {
  let myHttp= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b6f5731578b74be196392746221310&q=${country}&days=3&aqi=no&alerts=no`)
  let fina=await myHttp.json();
  container=fina
  console.log(fina)
  date()
  
}


let contentSearch={
  code:search.value,
}
search.addEventListener("input",function () {
  getBusiness(search.value);
  
})
getBusiness('Cairo')

function date() {
    let cartona=``
    cartona =` <div class="iuo col-md-4 col-sm-12  ps-0 pe-0 text-white" >
     <div class="poi d-flex justify-content-between text-white  pe-2 ps-2">
    <h6 class="p-2">saturday</h6>
    <h6 class="p-2">${container.forecast.forecastday[0].date}</h6>
  </div>
  <h6 class="pt-4 ps-3 " id="country">${container.location.name}</h6>
  <span class="ghj pt-4 ps-3" id="oc" >${container.location.lat}o</sup>C</span>
  <img src="${container.current.condition.icon}" class="img1 ps-3" alt="">
  <p class="par ps-3">${container.current.condition.text}</p>
  
  <div class="d-flex ">
    <div class="one  ms-3 pb-2">
      <img src="img/icon-umberella@2x.png" class="imde" alt="">
      <span>20%</span>
    </div>
    <div class="two  ms-3 pb-2">
      <img src="img/icon-wind@2x.png" class="imde" alt="">
      <span>18km/h</span>
    </div>
    <div class="there ms-3 pb-2">
      <img src="img/icon-compass@2x.png" class="imde" alt="">
      <span>East</span>
    </div>
  </div>
  </div>



  <div class="opo col-md-4 col-sm-12 text-center  ps-0 pe-0 " id="two">
  <div class="poi  p-2 ">
    <h6>sunday</h6>
  </div>
  <div class="ret">
    <img src="${container.forecast.forecastday[0].day.condition.icon}" class="img2 pt-5" alt="">
    <h4 class="kr pt-4 ps-3 ">${container.current.temp_c}</h4>
    <h6 class="pew  ps-3 ">${container.forecast.forecastday[1].hour[1].temp_c}</h6>
    
    <p class="par ps-3 pt-4 pb-4">${container.forecast.forecastday[0].day.condition.text}</p>
    
  </div>
</div>



<div class="iuo col-md-4 col-sm-12 text-center  ps-0 pe-0" id="there">
  <div class="poi  p-2 ">
    <h6>monday</h6>
  </div>
  <div class="ret">
    <img src="${container.current.condition.icon}" class="img2 pt-5" alt="">
    <h4 class="kr pt-4 ps-3 ">${container.location.lat}</h4>
    <h6 class="pew  ps-3 ">${container.location.lon}</h6>
    
    <p class="par ps-3 pt-4 pb-4">${container.current.condition.text}</p>
    
  </div>
 


</div>
`
    document.getElementById("one").innerHTML = cartona;
}

// let contentSearch={
//   code:search.value,
// }
// search.addEventListener("input",function () {
//   getBusiness(search.value);
  
// })
// getBusiness('Cairo')














// function search(term){
//   for (let i = 0; i < container.length; i++) {
//     if(container[i].name.tolowercase().includes(term.tolowercase())==true){

//     }
    
//   }
// }

// ${allIems[i].name}