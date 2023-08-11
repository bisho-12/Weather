var search=document.querySelector("#search")
var change=document.querySelector(".change")
var cartona=` `;
var  apiresponse;
var  finalOne;
var countryName;
var country;
var dateDays;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//-->dayname for the seconde and first only
const d = new Date();
tag=weekday[d.getDay()]
//--->day number
const x= new Date();
let dyNum = x.getDate();
//--->month name
var dy= new Date()
 var Name =month[dy.getMonth()]
//de 34an awl ma aktb ay haga f l input 

    search.addEventListener("input",function()
    {
    countryName=search.value ;
getweather(countryName)
displaycountry();

}
)



 async function getweather(countryName)
{
  apiresponse= await  fetch(`https://api.weatherapi.com/v1/forecast.json?key=b99e747077dd4e249b8152109230808&q=${countryName}&days=3`);
  finalOne= await apiresponse.json();
  dateDays= finalOne.forecast.forecastday[0].date;
  country=  finalOne.location.name;
}




 function displaycountry()
{
   cartona=`<div class="row">
    <div class="card col-sm-12 col-md-6 col-lg-4 position-relative" >
        <div class="">
            <div class="days d-flex  p-2 ">
             <h6>${tag}</h6>
  <h6 class="ms-auto "><span>${dyNum} </span>${Name}</h6>
             
        </div>
        <div class=" main p-2 ">
                <h3 class="" id="change">${country}</h3>
                <div>
                <h3 class="degree  fs-1">${finalOne.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C</h3>
             <img src="${finalOne.forecast.forecastday[0].day.condition.icon}" alt=" "class= "w-25">    
                </div>
                <h6 class="custom p-2">${finalOne.forecast.forecastday[0].day.condition.text}</h6>
                       <span><i class="fa-solid fa-umbrella" style="color: dark;"></i> 20% </span>                      
                       <span class="ms-3"><i class="fa-solid fa-wind" style="color: dark;"></i> 18 km/h </span>                      
                       <span class="ms-3"><i class="fa-regular fa-compass" style="color: dark;"></i> East </span>         
        </div>
        </div>
    </div>
    <div class="card col-sm-12 col-md-6 col-lg-4 "  >
<div class="days text-center p-2 ">
<h6 class="">${weekday[d.getDay()+1]}</h6>   
</div>
<div class="text-center mt-5">
<div class=" ">
<img src="${finalOne.forecast.forecastday[1].day.condition.icon}" alt="" class="w-25">
<h2 class="fs-1">${finalOne.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
<h6 class="fs-5">${finalOne.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</h6>
<h6 class="custom ">${finalOne.forecast.forecastday[1].day.condition.text}</h6>
</div>       
</div>
</div>
<div class="card col-sm-12 col-md-6 col-lg-4 "  >
<div class="days  text-center p-2 ">
   <h6 class="">${weekday[d.getDay()+2]}</h6>   
</div>
<div class="text-center mt-5">
    <div class=" ">
        <img src="${finalOne.forecast.forecastday[2].day.condition.icon}" alt="" class="w-25">
    <h2 class="fs-1">${finalOne.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
    <h6 class="fs-5">${finalOne.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</h6>
    <h6 class="custom "> ${finalOne.forecast.forecastday[2].day.condition.text}</h6>
</div>       
</div>

    </div>
</div>`
document.getElementById("box").innerHTML=cartona;
}



