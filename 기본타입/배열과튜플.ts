{
	//Array (배열안에 타입 하나)
	let arr1: number[] = [1, 2, 34] //이것을 사용할 예정 이것이 보기 간단하다.
	let arr2: Array<string> = ['1', '1'] //제네릭

	//Array (배열안에 타입이 다양함)
	let arr3: [string, number, string] = ['1', 1, '1']

	// 튜플 사용 예시
	const users: [string, number][] = [
		['택', 1],
		['태', 2],
		['텍', 3],
		[5, '기'], //이러한 규칙성에 적합하지 않은 놈을 거르기 좋음
	]
}
