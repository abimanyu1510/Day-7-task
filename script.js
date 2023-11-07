// ARRAY METHODS: DAY -7- TASK:
//--------------------------------------------------------------------------
//b.Get all the countries with a population of less than 2 lakhs using Filter function:
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
var result =JSON.parse(data);
var filter7=result.filter((p)=>p.population<200000)
var final=filter7.map((fil)=>console.log(fil.name.common))
}
//------------------------------------------------------------------
//d.Print the total population of countries using reduce function:
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
var result=JSON.parse(data)
var reduce1=result.reduce((acc,cv)=>acc+cv.population,0)
console.log(reduce1);
}
//--------------------------------------------------------
//c.Print the following details name, capital, flag, using forEach function

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
var result =JSON.parse(data);
var details=result.forEach((x)=>console.log(`Name: ${x.name.common},Capital: ${x.capital},Flag:${x.flags.png}`))
}
//-----------------------------------------------------------------------------------
// //a.Get all the countries from Asia continent /region using Filter function

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
var result =JSON.parse(data);
 var filter2=result.filter((element)=>console.log(element.region))
}
//-----------------------------------------------------------------------------
//e.Print the country that uses US dollars as currency:
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
var result =JSON.parse(data);
 var us=result.filter((s)=>s.currencies && s.currencies.USD)
var US=us.forEach((t)=>console.log(`${t.name.common}`))
}




