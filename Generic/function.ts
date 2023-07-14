// {
// 	function checknotNull(arg: number | null): number {
// 		if (arg == null) {
// 			throw new Error('not valid number!')
// 		}
// 		return arg
// 	}
// 	const result = checknotNull(123)
// 	console.log(result)
// 	checknotNull(null)

// 	function checknotNull<GENERIC>(arg: GENERIC | null): GENERIC {
// 		if (arg == null) {
// 			throw new Error('not valid number!')
// 		}
// 		return arg
// 	}
// 	const number = checknotNull(123)
// 	const boal: boolean = checknotNull(true)
// }

/*
제네릭이란?
제네릭은 타입을 마치 함수의 파라미터처럼 쓰는것과 같다.
제네릭은 작성할때 타입을 지정하는것이 아닌 코드가 실행하는곳에서 타입을 지정해주는것이다. 
코드를 작성할때 식별자 예를 들어 T이런식으로 많이 사용하는데 그걸 통해서 아직 정해지지 않은 타입이다. 라고 타입을 명시하는것이다.
필드의 첫번째 글자를 사용하기도 한다.
 
제네릭 사용이유?
한가지 타입 보다는 여러가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용된다.
재사용성이 높은 함수 혹은 클래스에 생성할수있다.
*/
