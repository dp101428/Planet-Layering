class Layer{
	constructor(scene, index, array, colour, quantity= 0, buttons, passiveGrowth){
		this.scene = scene
		this.index = index
		this.array = array
		this.colour = colour
		this.quantity = quantity
		this.objects = [];
		this.buttons = buttons
		this.buttons.forEach((button=>{
			button["button"].setInteractive();
    		button["button"].on('pointerdown', button.effect);
    		button["button"].disableInteractive()
    		button["button"].setVisible(false)
    		button["button"].setDepth(index + 1)
		}))
    	this.passiveGrowth = passiveGrowth
	}

	update(){
		this.buttons.forEach((button)=> {
			if (button["requirement"] <= this.quantity){
				if(!button["button"].visible){
					button["button"].setVisible(true)
					button["button"].setInteractive()
				}
			}
			if(button["requirement"] <= this.array[1].quantity){
				if(button["button"].visible){
					button["button"].setVisible(false)
					button["button"].disableInteractive()
				}
			}
		})
		if(this.quantity < 3600){
    		this.quantity += this.passiveGrowth
    		this.quantity = Math.round(this.quantity * 10)/10

    	}
    	if(this.quantity > 3600)
			this.quantity = 3600
		console.log(Math.max(this.index-1, 0))
		this.quantity = Math.min(this.quantity, this.array[Math.max(this.index-1, 0)].quantity)
    	console.log(this.passiveGrowth)
		//each shape is 10x10, grid is 30x30
		if(this.quantity != Math.floor(this.quantity))
			return
		let newObjects = []
		let totalToDraw = this.quantity;
		let sideLength = Math.floor(Math.sqrt(this.quantity))
		if(this.quantity != 0){
			newObjects.push(this.scene.add.rectangle(340 + sideLength * 5, 60+ sideLength * 5, 10 * sideLength, 10 * sideLength, this.colour).setDepth(this.index))
			totalToDraw -= sideLength * sideLength;
		}
		let i = 0
		while (totalToDraw > 0 && i < sideLength){
			newObjects.push(this.scene.add.rectangle(340 + sideLength*10 +5, 60 + 10 * i +5, 10, 10, this.colour).setDepth(this.index))
			totalToDraw -= 1;
			i += 1;
		}
		let j = 0
		while (totalToDraw > 0 && j < sideLength + 1){
			newObjects.push(this.scene.add.rectangle(340 + 10 * j + 5, 60 + sideLength * 10 +5, 10, 10, this.colour).setDepth(this.index))
			totalToDraw -= 1;
			j += 1;
		}
		this.objects.forEach(
			(shape) => {shape.destroy()}
		)
		this.objects = newObjects;
	}
}