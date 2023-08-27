{
	/**
	 * keyof 연산자
	 * 객체 타입에 적용하는 연산자
	 */

	interface Person {
		name: string
		age: number
	}
	function Test(person: Person, key: keyof Person) {
		return person[key]
	}
	const person: Person = {
		name: 'dsa',
		age: 312,
	}
	Test(person, 'name')
}
