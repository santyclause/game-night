export class Player {
  constructor(name, icon) {
    this.name = name;
    this.total = 0;
    this.icon = icon;
  }



  get playerCard() {
    return `
    <div class="col-12 col-md-6 text-center player">
      <span>${this.icon}</span>
      <span>${this.name}</span>
      <button class="mbtn text-light" onclick="app.PlayerController.decreaseTotal('${this.name}')"><i class="mdi mdi-minus-circle-outline"></i></button>
      <span>${this.total}</span>
      <button class="mbtn text-light" onclick="app.PlayerController.increaseTotal('${this.name}')"><i class="mdi mdi-plus-circle-outline"></i></button>
    </div > `
  }
}