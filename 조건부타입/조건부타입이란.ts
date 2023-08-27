{
	/**
	 * 조건부 타입
	 * 삼항 연산자를 이용한다.
	 */

	type A = {
		a: number
	}
	type B = {
		a: number
		b: number
	}
	/**
	 * 아래는 조건부 타입이다.
	 * 타입 B가 A타입을 확장하냐? 그러면 objB는 number이고 아니면 string인것이다.
	 * 그러면 아래 동작은?
	 * 실제로 B는 A의 슈퍼타입이다 그래서 확장 true이고 objB는 number인것이다.
	 *
	 * 즉, 쉽게 말해서 조건부 타입은
	 * 삼항 연산자 쓰는거고 확장하는게 서브타입인지 확인하고 맞으면 참 아니면 거짓
	 *
	 * 조건부 타입 활용 (제네릭과 많이 씀)
	 */
	type ObjB = B extends A ? number : string

	//제네릭과 조건부 타입
	//제네릭 조건부 타입은 아래와 같은 상황에 좋다
	//이 타입은 string과 number의 변경이다. 즉 T가 number가 들어오면 서브타입 적용하니 string, string이 들어오면 extends가 number이니깐
	//서브타입 아니니깐 number가 되는 형식이다.
	type StringSwitchNumberType<T> = T extends number ? string : number

	let test1: StringSwitchNumberType<1> //string
	let test2: StringSwitchNumberType<'hi'> //number

	function Remove(text: string) {
		//replace는 첫번째 인수를 찾아 두번째 인수로 변경하는 메서드다 즉, 모든 공백을 찾아 제거하는거지
		return text.replace(' ', '')
	}
	let result = Remove('hi im')
}
