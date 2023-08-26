{
	/**
	 * 첫번째 사례
	 */
	function swap<T, U>(a: T, b: U) {
		return [b, a]
	}

	//만약 아래처럼 첫번째 인수가 string이면 T는 string으로 추론 그래서 두번째 인수 2는 오류가 뜬다.
	//이런상황에서는 그러면 제네릭을 2개를 들고온다.
	const [a, b] = swap('1', 2)

	//두번째 사례
	function returnFirstValue<T>(data: T[]) {
		return data[0]
	}

	let num = returnFirstValue([0, 1, 2])
	let str = returnFirstValue(['0', '1', '2'])

	//세번째 사례
	//T는 확장하는데 number 타입의 length를 가지고 있는 객체로 확장을 한다?
	//lenght가 없는친구는 허용 안되는거임
	function getLength<T extends { length: number }>(data: T) {
		return data.length
	}
	let aa = getLength([1, 2, 3])
	let bb = getLength('12312')
	let cc = getLength({ length: 10 })
}
