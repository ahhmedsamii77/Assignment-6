"use strict";
class Details{
  constructor(){
    document.querySelector(".fa-xmark").addEventListener("click",(e) => {
      document.querySelector(".details-section").classList.add("d-none");
      document.querySelector(".games-section").classList.remove("d-none");
      document.querySelector(".navbar").classList.remove("d-none");
      document.querySelector("header").classList.remove("d-none");   
     })
  }
}
export{Details};