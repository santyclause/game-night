import { router } from './router-config.js';
import { PlayerController } from './controllers/PlayerController.js';
const USE_ROUTER = false

class App {

  PlayerController = new PlayerController();

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
