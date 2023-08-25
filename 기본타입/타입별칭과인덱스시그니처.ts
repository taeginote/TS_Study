{
	//타입 별칭
	let user: User = {
		id: 1,
		name: 'dsa',
		birth: 'dsad',
	}
	//이것이 점점 커지면서 가독성에 좋지 않고 중복된 타입을 재사용할수 없음
	//타입을 변수처럼 사용하는 방식
	type User = {
		id: number
		name: string
		birth: string
	}

	//인덱스 시그니처
	//객체타입을 좀더 유연하게
	type ContryCodesType = {
		Korea: string
		UnitedState: string
	}
	type ContryCodesType1 = {
		[key: string]: string
	}
	//이 객체의 프로퍼티와 value의 규칙을 확인해라
	// string : string이다.

	let contryCodes: ContryCodesType1 = {
		Korea: 'ko',
		UnitedState: 'us',
	}

	type ContryNumberCodesType1 = {
		[key: string]: number
	}
	let contryNumberCodes: ContryNumberCodesType1 = {
		Korea: 410,
		UnitedState: 840,
	}
	//인덱스 시그니처 주의점
	//인덱스 시그니처는 자신의 규칙을 위반하는 놈
	//만약 예를 들어
	type ContryNumberAndStringCodesType = {
		[key: string]: number
		korea: string //❌틀림 이유는 인덱스 시그니처 타입에서 추가로 korea는 문자열? 이것은 불가하다 기존 위에 조건과 동일하거나 호환할수있는놈이 가능한것이다.
	}
}
