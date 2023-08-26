{
	/**
	 *  인터페이스
	 * 타입에 이름을 지어주는 또 다른 문법
	 * 객체의 구조를 정의하는데 특화된 문법
	 * (상속, 합침 등의 특수한 기능을 제공함)
	 * interface는 유니온 혹은 인터섹션 X
	 *
	 * 인터페이스에 대문자 I를 앞에 넣는것을 헝가리 표기법이다.
	 * 근데 이건 JS에서 많이 쓰이지 않는다.
	 * 스네이크, 혹은 카멜을 많이 쓰는데 인터페이스를 위한 헝가리 표기법은 논란이 있다.
	 * 회사마다 다르다는것을 알자.
	 */

	interface Person {
		name: string
		age: number
		sayHi(): void
		sayHi(a: number, b: number): void
	}

	const person: Person = {
		name: '홍길동',
		age: 11,
		sayHi: function () {
			console.log('hi')
		},
	}
}
