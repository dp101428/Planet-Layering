class Layer{
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
		if(this.quantity != Math.floor(this.quantity))
			return
		let newObjects = []
		let totalToDraw = this.quantity;
		let sideLength = Math.floor(Math.sqrt(this.quantity))
		console.log(totalToDraw)
		console.log(sideLength);
		if(this.quantity != 0){
			newObjects.push(this.scene.add.rectangle(340 + sideLength * 5, 60+ sideLength * 5, 10 * sideLength, 10 * sideLength, this.colour))
			totalToDraw -= sideLength * sideLength;
		}
		let i = 0
		while (totalToDraw > 0 && i < sideLength){
			newObjects.push(this.scene.add.rectangle(340 + sideLength*10 +5, 60 + 10 * i +5, 10, 10, this.colour))
			totalToDraw -= 1;
			i += 1;
		}
		console.log(i)
		console.log(totalToDraw)
		let j = 0
		while (totalToDraw > 0 && j < sideLength + 1){
			newObjects.push(this.scene.add.rectangle(340 + 10 * j + 5, 60 + sideLength * 10 +5, 10, 10, this.colour))
			totalToDraw -= 1;
			j += 1;
		}
		console.log(j)
		console.log(totalToDraw)
		
		console.log("difference")
		console.log(this.quantity - i - j - sideLength * sideLength)
		this.objects.forEach(
			(shape) => {shape.destroy()}
		)
		this.objects = newObjects;
	}
}
