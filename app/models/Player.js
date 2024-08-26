export class Player {
  constructor(name, icon) {
    this.name = name;
    this.total = 0;
    this.icon = icon;
  }

  drawPlayers() {
    return `
    <div class="col-12 col-md-6 text-center player">
      <span>${this.icon}</span>
      <span>${this.name}</span>
      <button class="btn text-light"><i class="mdi mdi-minus-circle-outline"></i></button>
      <span>${this.total}</span>
      <button class="btn text-light"><i class="mdi mdi-plus-circle-outline"></i></button>
    </div>`
  }
}