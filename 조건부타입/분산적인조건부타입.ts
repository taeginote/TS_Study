{
	/**
	 * 분산적인 조건부 타입
	 */
	type StringSwitchNumberType<T> = T extends number ? string : number

	let a: StringSwitchNumberType<number>

	let b: StringSwitchNumberType<string>

	//아래는 분산적인 조건부 타입
	//저렇게 union타입을 조건부에 넣으면 한번에 제네릭 T에 들어가는게 아니라 순차적?으로 들어간다.
	//한번은 string 한번은 number 이런식 그리고 그 두개가 union으로 정의되는것이다.
	//
	let c: StringSwitchNumberType<string | number>
}
