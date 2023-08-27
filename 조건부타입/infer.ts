{
	/**
	 * infer
	 * 조건부 타입에서 특정 타입만 가져온다
	 */
	type Func = () => string

	type FunB = () => number

	//infer R은 그냥 R이라고 봐라
	//그래서 Func가 들가면 T는 Func가 된다.
	//근데 infer는 참으로 추론을 하게 한다 그래서 즉 R은 Func에서는 string이 되는거고, FunB에서는 number로 infer가 참으로 추론한것이다.
	//즉, 조건식을 참으로 만드는 것을 infer라고 생각해라

	//다른점 infer에 그냥 타입을 넣으면 never가 된다.
	//그 이유는 서브타입으로 할수있는게 없다. 즉, 타입 R을 추론할수 없기때문에 never로 하는것이다. 추론하지 못하는것을 거짓으로 한다!
	type PromiseUnpack<T> = T extends Promise<any> ? any : never
	//1. T는 프로미스 타입이어야한다.
	//2. 프로미스 타입의 결과값 타입을 반환해야 한다.

	type PromiseA = PromiseUnpack<Promise<number>>
	//number

	type ReturnType<T> = T extends () => infer R ? R : never

	type A = ReturnType<Func>

	type B = ReturnType<FunB>

	//하지만 우리는 반환값의 타입만 가져오기를 원했음
}
