{
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
	}
	/*
	class 사용법?
	1. class안에서 변수는 const, let 함수는 function을 사용하지 않는다.
	2. 예를들어 아래 변수중 coffeeBeans를 접근하는 방법 원래는 그냥 coffeeBeans를 호출했다.
	하지만 class안에있는 this.coffeeBeans라는 것으로 부른다. 내 클래스 안에있는 변수에 접근할때는 this.을 넣는다.
	3. constructor함수는 class를 가지고 오브젝트 instructor을 만들때 항상 호출당하는 놈이다.
	-> 이렇게 하고 부르면 위에 클래스를 이용해 object를 만들수있다.
	   new CoffeeMaker() 이런식으로 오브젝트 생성가능

	하지만 class내부에서 선언한 BEANS_GRAMM_PER_SHOT이것은 변하지 않는 값인 7을 사용한다.
	그런데 이걸 멤버 변수로 작성하면 클래스를 이용해 만드는 오브젝트마다 저 숫자가 들어있다.
	이러면 메모리를 낭비하는것이다. 이런것은 앞에 static을 넣으면 class level로 지정한다.
	class level은 오브젝트를 만들때마다 생성하지 않는것
	사용할때는 이제 this를 하는것이 아니라 클래스이름.BEANS_GRAMM_PER_SHOT 이런 형식이다.
	 
	클래스는 관련된 속성과 함수들을 묶어서 어느 모양의 데이터가 될것이다 라는것을 정의하는것이다.
	이 정의된것에 데이터를 넣어서 실제로 오브젝트를 생성할수있다.
	이때 오브젝트마다 새로 만들어야할 데이터가 있다면 멤버변수 즉 일반변수처럼 선언하고
	class level에서 다같이 공유할수있는 것읻면 static을 이용하자
	static은 멤버변수 뿐만아니라 함수에서도 적용가능

	static의 ex
	Math.abs 이것은 우리가 바로 쓸수있는것은 class level이여서 오브젝트를 생성하지않고 바로 쓸수있는것이다.
	*/
	class CoffeeMaker {
		BEANS_GRAMM_PER_SHOT: number = 7 //class levet로 지정
		coffeeBeans: number = 0 //instance (object) level
		name: string = '박선영'

		constructor(coffeeBeans: number, name: string) {
			this.coffeeBeans = coffeeBeans
			this.name = name
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
				throw new Error('Not enough coffee beans!')
			}
			this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT
			return {
				shots,
				hasMilk: false,
			}
		}
	}

	const maker = new CoffeeMaker(32, '김태기')
	console.log(maker)
}
