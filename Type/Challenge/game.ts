{
	//받는 매개변수는 union 타입으로 받는게 맞다고 생긱이 된다.
	//하지만 내가 먼처음에 할려고 했던 방식은 함수 return 문도
	/*
    ex)
    type Coordinate = {
		x:number,
		y:number,
	}
    이렇게 union타입으로 return도 예측하고 싶었다.
    하지만 이렇게 하면 무슨이유때문인지는 모르겠지만 return하는곳에서는 맞지않다는 오류가 떠서 아주 의문이다..
    */

	type Kind = 'up' | 'down' | 'left' | 'right'

	let coordinate = {
		x: 0,
		y: 0,
	}

	function move(kind: Kind) {
		switch (kind) {
			case 'up':
				coordinate.y += 1
				break
			case 'down':
				coordinate.y -= 1
				break
			case 'left':
				coordinate.x -= 1
				break
			case 'right':
				coordinate.x += 1
				break
		}
	}

	console.log(coordinate) //{x:0, y:0}
	move('up')
	console.log(coordinate) //{x:0, y:1}
	move('down')
	console.log(coordinate) //{x:0, y:0}
	move('left')
	console.log(coordinate) //{x:-1, y:0}
	move('right')
	console.log(coordinate) //{x:0, y:0}
}
