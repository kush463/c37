class Form {
constructor(){
    this.input = createInput("name")
    this.button = createButton("play")
    this.greeting = createElement('h3');

}

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

display(){
var title = createElement('h2');
title.html("car racing game");
title.position(450,0);

this.input.position(450,160);
this.button.position(450,200);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount = playerCount + 1;
    player.index = playerCount
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("welcome " + player.name);
    this.greeting.position(450,160);
})
}

}