{
	/**
	 * 사용자 정의 타입가드
	 *
	 */
	type Dog = {
		name: string
		isBark: boolean
	}
	type Cat = {
		name: string
		isScratch: boolean
	}
	type Animal = Dog | Cat

	//이럴때는 원래 종류 같은 거를 타입에 넣어 서로소 유니언타입으로 가능한데
	//안된다라는상황에서는 다른것을 써야하니 적용해보자
	function animal(animal: Animal) {}
}
