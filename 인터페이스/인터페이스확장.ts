{
	//인터페이스의 확장
	interface Animal {
		name: string
		age: number
	}
	interface Dog {
		name: string
		age: number
		isBark: boolean
	}
	interface Cat {
		name: string
		age: number
		isScratch: boolean
	}

	//위에 코드는 중복되는 코드가 많다.
	//즉, 비효율적이다.

	//확장 extends 즉 왼쪽 Animal의 타입을 가지고 Dog1 혹은 Cat1의 타입까지 가지는 타입이다.
	//상속이다.
	//만약 상속받는 타입을 다시 변경하고싶을때 ex) Dog1에서 name:'dog' 이런식으로 타입을 다시 정의해도 괜찮다.
	//그 이유는 name은 string인데 그게의 서브타입인 dog를 하는것이니 하지만 서브타입이 아닌 다른것을 넣는것은 오튜가 뜬다.
	//즉, 원본 프로퍼티의 서브타입으로만 정의를 한다라고 생각을 하자
	//인터페이스의 extends는 type alias가 들어가도 괜찮다 즉 객체면 가능한것임
	interface Animal1 {
		name: string
		age: number
	}
	interface Dog1 extends Animal {
		isBark: boolean
	}
	interface Cat1 extends Animal {
		isScratch: boolean
	}

	//다중 확장이 가능, 이거는 Dog1과 Cat1을 다 가질수있는거임
	//그래서 유연하게 객체타입을 사용하는것은 interface가 유리하다.
	//확장할수도있고 객체에서는 위와 같은 장점을 보유하고있으니
	interface DogCat extends Dog1, Cat1 {}
}
