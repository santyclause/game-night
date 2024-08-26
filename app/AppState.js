import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  iconList = ['🐀', '🦄', '🤡', '😡', '🦊', '🐦‍🔥', '🐦‍⬛', '🪽', '🦆', '🐍', '🦔', '🦨', '🐒', '🐲', '😭', '🫠', '😏', '😀', '😊', '🙃', '😇', '🤠', '🥸', '🦀', '🦐', '🧐', '👻']
  players = [new Player("Jake"), new Player("Mick"), new Player("Jeremy")]
}

export const AppState = createObservableProxy(new ObservableAppState())