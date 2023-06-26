//Ts 타입을 명확하게 하므로써 프로그래밍한다.
{
	//Js
	//변수선언
	// old: var 💩
	// new : let
	let name = 'hello'
	name = 'hi'

	// const
	const age = 5
	//재선언 ❌

	//JS
	//Primitive: number, string, boolean, bigint,symbol.null,undefined (원시타입)
	//Object: function, array... (원시보다는 복잡한 데이터를 담는다.)

	//    number
	let num: number = 10
	num = 133

	//string
	const str: string = 'Strtest'

	//boolean
	const boal: boolean = false

	//undefined (값이 있는지 없는지 결정 ❌)
	let name1: undefined //좋지않다.
	let numer1: number | undefined //이렇게 쓰는 경우가 더 많다.
	numer1 = undefined
	numer1 = 1

	//return값이 숫자 혹은 undefined인 함수
	function find(): number | undefined {
		return undefined
	}

	//null (여기는 텅텅 비어있다!!!라는 의미)
	let person1: null //💩
	let person2: string | null //즉 undefind 혹은 null은 단독으로만 쓰지말자 그러면 의미가 없다.

	//unknown (알수없는 타입이다. 즉 💩이다. )
	// 타입스크립트는 타입이 없는 js와 연동해야하므로 리턴값을 모르는 함수들은 쓰는 것인데 쓰지말자
	let notSure: unknown = 0
	notSure = '321'
	notSure = true

	//any (이것도💩이다. 이것도 아무거나 들어갈수있는거다.)
	let anything: any = 0
	anything = 'hedsa'

	//unknown과 any는 진짜 쓰지말아보자

	//void (아무 값도 리턴하지 않는 놈한테, 비어있는 느낌)
	//보통은 함수에서 무언가를 리턴할때 주는게 좋지만, void는 리턴이 가능하다.
	//하지만 변수에 선언해서 쓰는 경우는 undefined만 선언이 가능하기 때문에 선언 하지말자
	function print(): void {
		console.log('hello')
	}

	//never
	//throwError는 어플리케이션에서 예상하지 못한 에러가 발생했을때 쓰는 함수
	//never는 절대 절대 리턴할수 없다.
	function throwError(message: string): never {
		//message -> server(log)
		// throw new Error(message)
		while (true) {}
	}

	//object (즉 원시타입을 제외한 추상적인 배열, 객체 다 가능함 즉,💩이다)
	let obj: object
	function acceptSomeObject(obj: object) {}
}
