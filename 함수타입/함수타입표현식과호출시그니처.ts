{
	/**
	 * 함수 타입 표현식
	 * 이 문법은 함수 타입 표현식이다 ( 타입스크립트 공식 문서 참고)
	 * 장점
	 * - 이것과 같은 매개변수 타입과 반환값 타입이 동일한 함수들을 타입을 재사용할수있음
	 * - 즉, 중복코드 제거할수있음.
	 */

	//함수의 타입을 타입 별칭으로 정의하는것
	//타입 별칭이란것은 오른쪽에 있는 저 타입의 닉네임을 왼쪽과 같은 ex) fnAddType이런식으로 부르겠다. 이런것이다,
	//그래서 매개변수를 추가하거나 그러면 오류가 뜬다. 즉 매개변수의 수와 타입을 먼저 확인후 진행하는것이 중요하다.
	type fnAddType = (a: number, b: number) => number

	const add = (a: number, b: number): number => a + b
	const add1: fnAddType = (a, b) => a + b
	const add2: (a: number, b: number) => number = (a, b) => a + b

	/**
	 * 호출 시그니처
	 * 이것도 위에 타입표현식과 동일, 사용 방법이
	 *
	 */
	type fnAddType1 = {
		(a: number, b: number): number
	}
}
