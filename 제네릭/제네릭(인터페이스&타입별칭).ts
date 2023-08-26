{
	/**
	 * 제네릭 인터페이스
	 *
	 */

	interface KeyPari<K, V> {
		key: K
		value: V
	}

	//제네릭 인터페이스는 타입 정의할때 제네릭 타입을 할당해줘야함
	//제네릭 인터페이스는 타입 으로 정의할때 타입을 선언해줘야하는거임
	let keyPair: KeyPari<string, number> = {
		key: 'key',
		value: 0,
	}

	let keyPair2: KeyPari<boolean, string[]> = {
		key: true,
		value: ['1'],
	}

	/**
	 * 인덱스 시그니처
	 * 제네릭을 쓰면 더 유연하게 사용 가능하다.
	 */

	interface NumberMap {
		[key: string]: number
	}
	let numberMap1: NumberMap = {
		key: 1,
	}

	//제네릭 타입 별칭
	type Map2<V> = {
		[key: string]: V
	}

	let stringMap2: Map2<string> = {
		key: 'dsa',
	}
	/**
	 * 제네릭 인터페이스의 활용 예시
	 * 유저 관리 프로그램
	 * 유저 구분 : 학생 / 개발자
	 * 아래 원래는 profile을 유니온으로 Student 혹은 Develop으로 진행을 했어야 했다.
	 * 하지만 저걸 제네릭으로 하면 타입 좁히기를 하지 않고 타입하는곳에서 Student와 Developer을 구분하여 집어넣으면
	 * 코드가 더 간결해진다는것을 알수있다.
	 */
	interface Student {
		type: 'student'
		school: string
	}
	interface Developer {
		type: 'developer'
		skill: string
	}
	interface User<T> {
		name: string
		profile: T
	}

	function goToSchool(user: User<Student>) {
		if (user.profile.type !== 'student') {
			console.log('잘못왔어 임마')
			return
		}
		const school = user.profile.school
		console.log(`${school}가자`)
	}

	const developerUser: User<Developer> = {
		name: 'dd',
		profile: {
			type: 'developer',
			skill: 'TS',
		},
	}
	const studentUser: User<Student> = {
		name: 'dd',
		profile: {
			type: 'student',
			school: 'KWU',
		},
	}
}
