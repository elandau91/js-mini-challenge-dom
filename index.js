/***** Deliverable 1 *****/
const header = document.querySelector("#header")

console.log(`Here's your header: ${header.textContent}`)


/***** Deliverable 2 *****/

header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

roster = document.querySelector(".player-container")

function update_roster(PLAYERS) {

    for (let i = 0; i < PLAYERS.length; i++) {

        roster.innerHTML +=  
            `<div class='player' data-number = ${PLAYERS[i].number} >
          <h3>
            ${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)
          </h3>
          <img src="${PLAYERS[i].photo}" alt="${PLAYERS[i].name}">
        </div>`
    }
}

update_roster(PLAYERS)

sterling = document.querySelector(".player[data-number='7']")

sterling.remove()




/***** Deliverable 4 *****/