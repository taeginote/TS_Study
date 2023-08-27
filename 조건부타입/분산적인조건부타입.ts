{
	/**
	 * 분산적인 조건부 타입
	 */
	type StringSwitchNumberType<T> = T extends number ? string : number

	let a: StringSwitchNumberType<number>

	let b: StringSwitchNumberType<string>

	let c: StringSwitchNumberType<string | number>
}
