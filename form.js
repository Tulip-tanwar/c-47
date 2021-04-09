class Form {
constructor(){

this.input=createInput("name");
this.button=createButton("play");
this.greeting=createElement('h2');
this.title=createElement('h2');
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
}
display(){
    this.title.html("my classroom");
    this.title.position(width/2,10);
    this.input.position(width/2-40,height/2-20);
    this.button.position(width/2+30,height/2);
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          playerCount+=1;
          fill("white");
          player.updateCount(playerCount);
          drawSprites();
      })
}
}