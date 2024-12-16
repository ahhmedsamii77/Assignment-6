"use strict";
import { Details } from "./details.js";
import { UI } from "./ui.js";
class Games{
  constructor(){
    this.getData("mmorpg");
    const allNavLinks = Array.from(document.querySelectorAll(".nav-link"));
    allNavLinks.forEach(navlink => {
      navlink.addEventListener("click",(e) => {
        document.querySelector(".nav-link.active").classList.remove("active");
        e.target.classList.add("active");
        this.getData(navlink.innerText);
      })
    });
  }
async getData(category){
  const loading = document.querySelector(".loading-section");
  loading.classList.remove("d-none");
  const req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,{
    headers: {
      'x-rapidapi-key': '0a6b68c451mshb5190933234986cp1adf6ajsn121f6de0a2e8',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  });
  const res = await req.json();
  const ui = new UI();
  loading.classList.add("d-none");
  ui.displayAllGames(res);
  this.setEventOnCards();
 }
async getDataById(id){
  const loading = document.querySelector(".loading-section");
  loading.classList.remove("d-none");
  const req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
    headers: {
      'x-rapidapi-key': '0a6b68c451mshb5190933234986cp1adf6ajsn121f6de0a2e8',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  });
  const res = await req.json();
  const ui = new UI();
  loading.classList.add("d-none");
  ui.displayGameById(res);
  new Details();
 }
 setEventOnCards(){
  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach(card => {
    card.addEventListener("click",(e) => {
      document.querySelector(".details-section").classList.remove("d-none");
      document.querySelector(".games-section").classList.add("d-none");
      document.querySelector(".navbar").classList.add("d-none");
      document.querySelector("header").classList.add("d-none");
  
      this.getDataById(Number(card.id));
    })
  });
 }
}
export{Games};