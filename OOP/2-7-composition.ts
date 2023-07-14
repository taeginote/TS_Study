{
	type CoffeeCup = {
		shots: number
		hasMilk?: boolean
		hasSugar?: boolean
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7 //class levet로 지정
		private coffeeBeans: number = 0 //instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
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

	class CaffeLatteMachine extends CoffeeMachine {
		private steamMilk(): void {
			console.log('우유')
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots)
			this.steamMilk()
			return {
				...coffee,
				hasMilk: true,
			}
		}
	}

	//즉 class는 오직 하나의 class만 상속할수있다.
	//이것을 해결한것이 composigion이다.
	class SweetCoffeeMaker extends CoffeeMachine {
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots)
			return {
				...coffee,
				hasSugar: true,
			}
		}
	}

	const machine = new CoffeeMachine(23)
	const latteMachine = new CaffeLatteMachine(23)
	const coffee = latteMachine.makeCoffee(1)
	console.log(coffee)
}
