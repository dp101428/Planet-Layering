class Play extends Phaser.Scene {
    constructor(){
        super("playScene")    
    }

    create(){
    	this.layer1 = new Layer(this, 0, null, null, new Color({r:255, g:0, b:0, a:255}), quantity= 0);
    }

    update(){

    }
}