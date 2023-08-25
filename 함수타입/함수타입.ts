{
	/**
	 * 자바스크립트 방법
	 * 함수를 설명하는 가장 좋은 방법
	 * 어떤 매개변수를 받고, 어떤 결과값을 반환하는지
	 *
	 * 타입스크립트는
	 * 매개변수의 타입은 어떤거고 결과값의 타인은 어떤거인지
	 */
	//반환값의 타입을 적지 않아도 return문을 통해서 추론을 한다. 하지만 잘 사용해야한다 추론이 잘못될수도있기때문
	function func(a: number, b: number) {
		return a + b
	}

	/**
	 * 화살표 함수 타입 정의하는 방법
	 * 반환값을 기준으로 자동 추론한다. 일반 함수와 동일
	 */
	const add = (a: number, b: number): number => a + b

	/**
	 * 함수 매개변수 (기본값이 있으면 기본값을 기준으로 타입 추론한다.)
	 * 주의점 2가지
	 * 1) 기본값과 다른타입으로 매개변수에 타입을 지정하면 오류 X
	 * 2) 함수를 호출할때 자동추론된 매개변수의 타입과 다른 타입의 인수로 전달하면 X
	 *
	 * 선택적 매개변수 사용 주의점
	 * 선택적 매개변수가 필수 매개변수 앞에 있으면 타입 지정하는곳에서 오류가 뜬다.
	 * 또한 선택적 매개변수 tall은 undefined혹은 number이다
	 * 저 함수에서 tall +10 이거는 오류가 뜬데 이유는 tall은 undefined일수도있기에 + 는 number형식이 가능할것이기에 오류가 뜨는것이다.
	 * 그래서 이럴때는 타입가드를 통해서
	 * ex)
	 * typeof tall === 'number 이럴때 아래에 더하는 그런 형식으로 진행을 해야한다.
	 */
	function mySelf(name = 'taegi', tall?: number) {
		console.log(name, tall)
	}

	/**
	 * rest 파라미터의 타입
	 *
	 */

	function rest(...rest: number[]) {
		let sum = 0
		rest.forEach(it => (sum += it))
	}
	rest(5, 4, 5, 3)
}
