"use strict";
class UI{
  displayAllGames(games){
    let container = "";
   games.forEach(game => {
    container += `
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex">
            <div id="${game.id}" class="card bg-transparent text-white">
              <div class="card-body">
                <figure><img class="w-100" src="${game.thumbnail}" alt="game"></figure>
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">${game.title}</h5>
                  <span class="bg-primary rounded-2 p-1">Free</span>
                </div>
                <p class="card-text mt-1">${game.short_description}</p>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="p-1 rounded-2">${game.genre}</span>
                <span class="p-1 rounded-2">${game.platform}</span>
              </div>
            </div>
          </div>
    `      
   });
   document.querySelector(".games-section .row").innerHTML = container;
  
  }
   displayGameById(game){
    console.log(game);
    document.querySelector(".details-section .container").innerHTML = `
          <div class="details-header mb-3 d-flex justify-content-between align-items-center">
          <h1>Details Game</h1>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="row">
          <figure class="col-12 col-md-4"><img class="w-100" src="${game.thumbnail}" alt="game"></figure>
          <div class="col-12 col-md-8">
            <h2>Title: ${game.title}</h2>
            <ul class="list-unstyled">
              <li class="mt-3"><span>Category: </span> <span>${game.genre}</span></li>
              <li class="mt-3"><span>Platform: </span> <span>${game.platform}</span></li>
              <li class="mt-3"><span>Status: </span> <span>${game.status}</span></li>
            </ul>
            <p> ${game.description}
            </p>
            <button class="btn btn-outline-warning"><a class="text-decoration-none text-white" target="_blank" href="${game.game_url}">Show Game</a></button>
          </div>
        </div>
    `
   }



}
export{UI};