class Play extends Phaser.Scene {
    constructor(){
        super("playScene")    
    }
    create(){
    	this.layer1 = new Layer(this, 0, null, null, Phaser.Display.Color.GetColor(255,0,0), 1);
    }

    update(){
    	this.layer1.draw()
    	if(this.layer1.quantity < 900){
    		this.layer1.quantity += 0.1
    		this.layer1.quantity = Math.round(this.layer1.quantity * 10)/10
    	}
    }
}