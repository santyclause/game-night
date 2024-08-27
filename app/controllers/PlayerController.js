import { AppState } from '../AppState.js';
import { RandomIcon } from '../services/RandomIcon.js';
import { playerService } from '../services/PlayerService.js';


export class PlayerController {
  constructor() {
    this.drawPlayers();
  }

  drawPlayers() {
    const playerElem = document.getElementById('playerList')
    const players = AppState.players
    let playerCont = '';

    players.forEach((player) => playerCont += player.playerCard)
    playerElem.innerHTML = playerCont

  }

  addPlayer(playerName) {
    event.preventDefault();
    let name = playerName.value
    let icon = RandomIcon.generate
    playerService.addPlayer(name, icon)
    this.drawPlayers()
  }

  increaseTotal(name) {
    playerService.increaseTotal(name);
    this.drawPlayers()
  }

  decreaseTotal(name) {
    playerService.decreaseTotal(name)
    this.drawPlayers()
  }
}