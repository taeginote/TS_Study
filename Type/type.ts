{
	const test = {
		name1: 'test1' as const,
		name2: 'test2',
		name3: 'test3',
		name4: 'test4',
	}
	/*
        기존 타입을 이용하면서 조금 다른 형태의 타입으로 변환하는것을 말함
    */
	type Video = {
		title: string
		author: string
		descrition: string
	}

	type Optional<T> = {
		//type object 정의 안에서
		// [] <= 이 기호를 쓰면 key를 빙글빌글 돌고, for-in과 비슷하다
		// 1. T타입의 있는 모든 key들을 순차적으로 P에 할당하고
		// 2. P의 key는 Optional이고 P의 값의 타입을 mapping 할수 있다.

		[P in keyof T]: T[P] //for...in처럼 행동함
	}

	type ReadOnly<T> = {
		readonly [P in keyof T]: T[P]
	}

	// type VideoOptional = {
	// 	title?: string
	// 	author: string
	// 	descrition?: string
	// }
	// type VideoReadonly = {
	//     readonly title: string
	//     readonly author: string
	// }
	// enum
	// enum을 사용하지 않는 이유를 tree shaking 관점에서 보면

	// 일단 tree-shaking이란?
	// 사용하지 않는 코드를 삭제하는것이다. 나무를 흔들면 죽은 잎사귀들이 떨어지는것같은것이다.
	// export 했지만 아무곳에서도 import를 하지 않은 모듈이나 사용하지 않는 코드를 삭제하여 번들 크기를 줄여 페이자 표시되는 시간을 줄일수있다.

	// 그러면 enum은?
	// enum은 열거형 변수로 정수를 하나로 합칠때 사용하는것입니다.

	// 하지만 enum을 왜 사용하지 말라하냐
	// enum은 타입스크립트가 자체적으로 개발한것이다. 즉 enum을 사용하면 Tree-shaking❌

	// 그러면 enum말고 뭐를 사용?

	// enum을 TS에사 사용하면 이것을 실행할때 자스로 바꿔주는데 그 과정에서 자바스크립트에서 구현하지 않는 것을 구현하기 위해서 타스 컴파일러는 즉시 실행 함수를 포함한
	// 코드를 생성합니다. 근데 그 과정에서 Rollup과 같은 번들러는 사용하지 않는 코드라고 판단해 Tree-shaking이 되지 않는다.
}
