{
	/**
	 * 템플릿 리터럴 타입
	 * 어떤 상황에 쓰는지 아래에서 보자
	 */
	type Color = 'red' | 'blue' | 'yellow'
	type Animal = 'dog' | 'cat'

	type ColorAnimalMix = `${Color}-${Animal}`
}
