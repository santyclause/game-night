import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayerService {
  addPlayer(name, icon) {
    let player = new Player(name, icon)
    AppState.players.push(player)
  }

  increaseTotal(name) {
    let selectedPlayer = AppState.players.find((player) => player.name == name);
    selectedPlayer.total++
  }

  decreaseTotal(name) {
    let selectedPlayer = AppState.players.find((player) => player.name == name);
    selectedPlayer.total--
  }
}

export const playerService = new PlayerService();