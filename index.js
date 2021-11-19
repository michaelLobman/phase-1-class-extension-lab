class Polygon {
	constructor(sidesArr){
		this.sidesArr = sidesArr;
	}

	get countSides(){
		return this.sidesArr.length;
	}

	get perimeter(){
		return this.sidesArr.reduce(((acc, side) => acc += side), 0);
	}

}

class Triangle extends Polygon{
	get isValid(){

		const a = this.sidesArr[0] + this.sidesArr[1] > this.sidesArr[2];
		const b = this.sidesArr[0] + this.sidesArr[2] > this.sidesArr[1];
		const c = this.sidesArr[1] + this.sidesArr[2] > this.sidesArr[0];
		if(a && b && c){
			return true;
		} else {
			return false;
		}

	}
	
}

class Square extends Polygon{
	get isValid(){
		return this.sidesArr.every(side => side === this.sidesArr[0])
	}

	get area(){
		return this.sidesArr[0]**2;
	}
}