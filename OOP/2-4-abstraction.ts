{
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
	}

	/*
    추상화
    우리는 커피를 만드는 단계가 복잡하다 원두 갈고 preheat하고 내리기까지
    우리는 어떤 함수부터 써야할지 모를때
    이럴때 쓰는게 abstraction 추상화가 나타난다.
    추상화는 interface를 간단하고 심플하게 만들어서 사용하는 사람이 심플하게 사용할수 있게 도와준다.
    추상화 방법)
    결론 -> 접근 제어자를 즉,encapsulation을 통해서 충분히 추상화를 할수있고
    또, interface를 통해서 추상화가 가능하다.
    1. 첫번째 방법 makeCoffee함수 말고 다 private으로 돌린다.
    즉 내부로직으로 돌려 외부에는 공개하지 않고 makeCoffee함수링 fillCoffeeBeans 만 공개를 한다.

    아니면 interface방법
    interface는 즉, 쉽게 생각해서 나랑 소통하려면 이런 이런 방법을 가지고 있어 이런 형식이다.
    계약서 같은 놈임
    */
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup
	}

	interface CommercialCoffeeMaker {
		makeCoffee(shots: number): CoffeeCup
		fillCoffeeBeans(beans: number): void
		clean(): void
	}
	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7 //class levet로 지정
		private coffeeBeans: number = 0 //instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans
		}

		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMachine(coffeeBeans)
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error('야이 음수 넣지마')
			}
			this.coffeeBeans += beans
		}
		clean(): void {
			console.log('기계 청소중💡')
		}

		private grindBeans(shots: number) {
			console.log(`${shots}이만큼 갈고있어`)
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error('커피콩이 없습니다')
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
		}

		private preheat(): void {
			console.log('🔥뜨끈뜨끈하게 만드는중~')
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots...❤️`)
			return {
				shots,
				hasMilk: false,
			}
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots)
			this.preheat()
			return this.extract(shots)
		}
	}

	class AmateurUser {
		constructor(private machine: CoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2)
		}
	}
	class ProBarista {
		constructor(private machine: CommercialCoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2)
			console.log(coffee)
			this.machine.fillCoffeeBeans(45)
			this.machine.clean()
		}
	}

	const maker: CoffeeMachine = CoffeeMachine.makeMachine(32)
	const amateur = new AmateurUser(maker)
	const pro = new ProBarista(maker)
	pro.makeCoffee()
}
