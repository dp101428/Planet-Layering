class layer{
	constructor(scene, index, layerAbove, layerBelow, colour, quantity= 0){
		this.scene = scene
		this.index = index
		this.layerAbove = layerAbove
		this.layerBelow = layerBelow
		this.colour = colour
		this.quantity = quantity
		this.objects = [];
	}


	draw(){
		//each shape is 10x10, grid is 30x30
		let totalToDraw = quantity;
		let sideLength = Math.floor(Math.sqrt(this.quantity))
		if(quantity != 0){
			objects.push(this.scene.add.rectangle(340, 60, 10 * sideLength, 10 * sideLength, this.colour))
			this.totalToDraw -= sideLength;
		}
		let i = 0
		while (totalToDraw > 0 && i <= sideLength){
			objects.push(this.scene.add.rectangle(340 + sideLength, 60 + 10 * i, 10, 10, this.colour))
			totalToDraw -= 1;
			i += 1;
		}
		let j = 0
		while (totalToDraw > 0 && j <= sideLength + 1){
			objects.push(this.scene.add.rectangle(340 + sideLength + 10 * j, 60 + sideLength, 10, 10, this.colour))
			totalToDraw -= 1;
			j += 1;
		}
	}
}