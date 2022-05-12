class Play extends Phaser.Scene {
    constructor(){
        super("playScene")    
    }
    create(){
    	this.layers = []
    	this.layers.push(new Layer(this, 0, this.layers, Phaser.Display.Color.GetColor(255,0,0), 1, 
    		[{button: this.add.text(350, 100, 'Heat up core', { fill: '#fff' }), effect: ()=>{this.layers[0].passiveGrowth += 0.1}, requirement: 151},
    		{button: this.add.text(450, 150, 'Add Earth', { fill: '#fff' }), effect: ()=>{this.layers[1].quantity += 1}, requirement: 700}], 0.1))
    	this.layers.push(new Layer(this, 1, this.layers, Phaser.Display.Color.GetColor(200,0,100), 0, [
    		{button: this.add.text(350, 100, 'Cool core', { fill: '#fff' }), effect: ()=>{this.layers[0].passiveGrowth -= 0.1,
    		 this.layers[1].passiveGrowth += 0.1}, requirement: 87}], 0))

    }

    update(){
    	this.layers.forEach((layer)=>{layer.update()})
    }
}