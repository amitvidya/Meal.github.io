const fav=[];

function addFav(favo){
    fav.push(favo);
    let innerHt='';
    innerHt= `<div class="container">`
    for(let i=0;i<fav.length;i++){
        innerHt+=`
        <div class="row">
          <div class="col">
          <li>${fav[i]}</li>
          </div>
        </div>` 
    }
    innerHt+=`</div>`
    document.getElementById("addFav").innerHTML=innerHt;
}
  async function showMeal(){
    let val=document.getElementById("form1").value;

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
    const meals = await response.json();
    for (var key in meals) {
        if (meals.hasOwnProperty(key)) {
          var valr = meals[key];
          console.log(valr[0]);
          var htm=`<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${valr[0].strMeal}</h5>
            <p class="card-text">${valr[0].strCategory}</p>
            <button class="btn btn-primary" onclick="addFav('${valr[0].strMeal}')">Add To fav</button>
          </div>
        </div>`
        document.getElementById("ineHtm").innerHTML=htm;
        }
      }
  }