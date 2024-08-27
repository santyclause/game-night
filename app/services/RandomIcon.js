import { AppState } from "../AppState.js";

class MakeRandomIcon {
  get generate() {
    let rand = Math.floor(Math.random() * AppState.iconList.length)
    return AppState.iconList[rand]
  }
}

export const RandomIcon = new MakeRandomIcon();