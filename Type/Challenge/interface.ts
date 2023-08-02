{
	type PositionType = {
		x: number
		y: number
	}
	type PositionInterface = {
		x: number
		y: number
	}
	//  class에서도 동작이 가능

	// Extends
	interface ZPositionInterface extends PositionInterface {
		z: number
	}
	type ZPositionType = PositionType & { z: number }

	//interface
	//계약서 같은 느낌
	//규격을 정리하는것이라면 interface를 사용하는것이 더 좋다.

	//type

	//데이터를 담을라고 하면 type을 사용하는것이 좋고
	//데이터를 처리하는것이라면 interface를 사용하는것이 더 좋다라는 생각?

	type Animal = {
		name: string
		age: number
		gender: 'male' | 'female'
	}
	type Name = Animal['name']
	const text: Name = 'hello'

	type Gender = Animal['gender']

	type Keys = keyof Animal
}
