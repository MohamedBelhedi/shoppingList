// const { clear } = require("console");


// var done=document.getElementById("#done")
var button= document.getElementById("enter");
var input=document.getElementById("userInput");
var ul=document.querySelector("ul");

// küzerfassen der functions
function inputLength(){
   return input.value.length;
}

function creatListElement(){

 // hier ein neues HTML element erstellen über JS
 var li=document.createElement("li");
 var btn=document.createElement("button")
 btn.innerHTML="x"
//  btn.style.background="red"
 li.appendChild(document.createTextNode(input.value));
 ul.appendChild(li);
 li.appendChild(btn)
// hier damit man nicht das selbe tausenmal duch das klicken einfügt
 input.value="";

 li.addEventListener("click",()=>{

    li.style.textDecoration="line-through"

 })


btn.addEventListener("click",()=>{

    li.remove(btn)
    




 })


   




}
function addListAfterClick(){
    if(inputLength()>0)
    {
        creatListElement();

    }  
    
}



var button2= document.querySelectorAll("button");



for(let i=0; i<button2.length;i++){


   
    button2[1].addEventListener("click",()=>document.getElementById("item0").remove())
    button2[2].addEventListener("click",()=>document.getElementById("item1").remove())
    button2[3].addEventListener("click",()=>document.getElementById("item2").remove())
    button2[4].addEventListener("click",()=>document.getElementById("item3").remove())
    button2[5].addEventListener("click",()=>document.getElementById("item4").remove())
    

    

}
var li4=document.querySelectorAll("li")

for(var i=0;i<li4.length; i++){

 li4[0].addEventListener("click",()=>{li4[0].style.textDecorationLine = "line-through";})
 li4[1].addEventListener("click",()=>{li4[1].style.textDecorationLine = "line-through";})
 li4[2].addEventListener("click",()=>{li4[2].style.textDecorationLine = "line-through";})
 li4[3].addEventListener("click",()=>{li4[3].style.textDecorationLine = "line-through";})
 li4[4].addEventListener("click",()=>{li4[4].style.textDecorationLine = "line-through";})



}







input.addEventListener("keypress",(event)=>{

     console.log(event)
    // Enterkey ansteuern über event.which ===13

    if(inputLength()>0&&event.which===13)
    {
  creatListElement();

    }




});

// Api

function searchInput(){

    return search.value.length;

}

let nutri_api={
    key:'5d64b86dad32fb754cb4eecc87e8c978',
    base:'https://api.nutritionix.com/v1_1/search/ ',
   
   
  
  }
  
  let h3=document.querySelector("h3")
  
  let search=document.getElementById("search")
  let query=search.value
  

  let button3=document.getElementById("enter2")
  button3.addEventListener("click",()=>{

    if(searchInput()>0){
        
      fetch(`${nutri_api.base}${query}`)
      .then(res=>res.json())
      .then(result=>{
       
        console.log(result.hits)
        let query=search.value
        let suche=nutri_api.base+query
        let robopage="https://robohash.org/${query}"
        var sting=suche.toString();
        h3.innerHTML=`<a>${sting}</a>`+"<h3>Link kopieren</h3>"
        var x=document.createElement("IMG")
        x.setAttribute("src",robopage)
        document.body.appendChild(x)
        
        
      
      });
      search.value=""
      
    }



  })
  search.addEventListener("keypress",(event)=>{
    
  
    if(searchInput()>0&&event.keyCode === 13){
        
      fetch(`${nutri_api.base}${query}`)
      .then(res=>res.json())
      .then(result=>{
       
        console.log(result.hits)
        let query=search.value
        let suche=nutri_api.base+query
        var sting=suche.toString();
        h3.innerHTML=`<a>${sting}</a>`+"<h3>Link kopieren</h3>"
        
        
      
      });
      search.value=""
      
    }
  
  })

// var pass=prompt("Gib das geheim Wort um rein zu kommen ")
// function enter(){
// return pass.value.length

// }


button.addEventListener("click",addListAfterClick);



// modal Section

let open=document.querySelector(".open")
let close_btn=document.querySelector(".close-btn")
let modal=document.querySelector(".modal")


function open_modal(){

    modal.showModal()

}

function close_modal(){

    modal.close();
}

open.addEventListener("click",open_modal);
close_btn.addEventListener("click",close_modal);

// document.addEventListener("DOMContentLoaded",()=>{


//     if(enter()=="1234"){

//         return true;


//     }else{
//         return false;
//     }



// })







//#region 
//versuche möglich die über eine OOP
// function loeschen(){

 
 
// document.getElementById("item0").remove()

 

// }
// function loeschen1(){

 
 
// document.getElementById("item1").remove()

 

// }
// function (){

 
 
// document.getElementById("item2").remove()

 

// }
// function loeschen3(){

 
 
// document.getElementById("item3").remove()

//  console.log("funktioniert")

// }
// function loeschen4(){

 
 
// document.getElementById("item4").remove()

 

// }
//#endregion Enden der Funktionen

//#region Beginn der Item funtion für Line Throug

// button2.forEach((li2)=>{

//     li2.addEventListener("click",loesch1)
//    


// });
// li4.forEach((item)=>{

//     item.addEventListener('click', function() {

//         li4[0].style.textDecorationLine = "line-through";
      
    
//       }
//     )

// })
//  btn.addEventListener("click",()=>{

//     for(var i=0;i<li.length;i++){
//         btn[0].remove(li);  
//         console.log("fanktioniert")
//     }
// hier wenn man den TagName sucht dann muss man auch die angabe des ersten oder zweiten.... Button angeben
// da es dann zu fehler kommen kann , da TagName function über Arrays läuft.
// var button=document.getElementsByTagName("button")[0];
// button.addEventListener("mouseleave", () => {
// document.querySelector("body").style.background="red";



// })
    