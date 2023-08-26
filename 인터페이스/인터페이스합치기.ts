{
	/**
	 * 선언 합침
	 */

	interface Person {
		name: string
	}
	interface Person {
		age: number
	}
	/**
	 * 위에는 선언 합침이라고 불리는 것이다.
	 * type alias에서는 오류가 뜨지만 interface는 가능하다
	 * 위와 같이 같은 Person이 nmae, age 이렇게 선언된것을
	 * 합쳐주는것이다.
	 */
}
