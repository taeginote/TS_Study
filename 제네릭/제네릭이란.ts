{
	/**
	 * 제네릭
	 */
	function func<T>(value: T): T {
		return value
	}

	//이때 T가 number가 들어오니 추론으로 number가 된다
	func(10)

	//이때 T가 boolean이 들어오니 추론으로 boolean이 된다.
	func(true)
	//그래서 제네릭 함수는 타입 선언에서는 제네릭으로 쓰고
	//호출할때 인수에 따라서 결졍된다.
	//근데 만약 인수에 따른 추론 말고 내가 정의하고 싶으면?
	func<number[]>([1, 2, 3])
}
