class Play extends Phaser.Scene {
    constructor(){
        super("playScene")    
    }
    create(){
    	this.layers = []
    	this.layers.push(new Layer(this, 0, this.layers, Phaser.Display.Color.GetColor(255,0,0), 380, 
    		[{button: this.add.text(350, 100, 'Heat core', { fill: '#fff' }), effect: ()=>{this.layers[0].passiveGrowth += 0.025}, requirement: 87},
    		{button: this.add.text(450, 150, 'Add Earth', { fill: '#fff' }), effect: ()=>{this.layers[1].quantity += 1}, requirement: 371}], 0.1))
    	this.layers.push(new Layer(this, 1, this.layers, Phaser.Display.Color.GetColor(120,42,42), 70, [
    		{button: this.add.text(350, 100, 'Cool core', { fill: '#fff' }), effect: ()=>{
    			if(this.layers[0].passiveGrowth - 0.025 > 0){
    				this.layers[0].passiveGrowth -= 0.025
    		 		this.layers[1].passiveGrowth += 0.025}
    		 }, requirement: 87}, 
    		{button: this.add.text(430, 150, 'Precipitate', { fill: '#fff' }), effect: ()=>{this.layers[2].quantity += 1}, requirement: 371}], 0))
    	this.layers.push(new Layer(this, 2, this.layers, Phaser.Display.Color.GetColor(0,0,200), 50, 
    		[{button: this.add.text(340, 100, 'Cycle water', { fill: '#fff' }), effect: ()=>{this.layers[2].passiveGrowth += 0.025}, requirement: 106}], 0))

    }

    update(){
    	this.layers.forEach((layer)=>{layer.update()})
    }
}