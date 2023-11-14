// ARRAY METHODS: DAY -7- TASK:
//--------------------------------------------------------------------------
//b.Get all the countries with a population of less than 2 lakhs using Filter function:
var request1 =new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload =function(){
var data1=request1.response;
var result1 =JSON.parse(data1);
var filter7=result1.filter((p)=>p.population<200000)
var final=filter7.map((fil)=>console.log(fil.name.common))
}
//------------------------------------------------------------------
//d.Print the total population of countries using reduce function:
var request2 =new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload =function(){
var data2 =request2.response;
var result2=JSON.parse(data2)
var reduce1=result2.reduce((acc,cv)=>acc+cv.population,0)
console.log(reduce1);
}
//--------------------------------------------------------
//c.Print the following details name, capital, flag, using forEach function

var request3 =new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload =function(){
var data3 =request3.response;
var result3 =JSON.parse(data3);
var details=result3.forEach((x)=>console.log(`Name: ${x.name.common},Capital: ${x.capital},Flag:${x.flags.png}`))
}
//-----------------------------------------------------------------------------------
// //a.Get all the countries from Asia continent /region using Filter function

var request4 =new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.onload =function(){
var data4 =request4.response;
var result4 =JSON.parse(data4);
 var filter2=result4.filter((element)=>console.log(element.region))
}
//-----------------------------------------------------------------------------
//e.Print the country that uses US dollars as currency:
var request5 =new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v3.1/all",true)
request5.send();
request5.onload =function(){
var data5 =request5.response;
var result5 =JSON.parse(data5);
 var us=result5.filter((s)=>s.currencies && s.currencies.USD)
var US=us.forEach((t)=>console.log(`${t.name.common}`))
}




