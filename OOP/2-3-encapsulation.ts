{
	//서로 관련있는 친구들을 캡슐화
	type CoffeeCup = {
		shots: number
		hasMilk: boolean
	}
	/*
        정보를 은닉할수있는 방법
        1. public
        2. private (어떤 누구도 외부애서 접근 불가)
        3. protected (외부에서 접근할수 없지만 상속한 자식 class에서만 접근이 가능)
        //따로 작성하지 않으면 모두 public으로 설정
        아래 코드를 예시로 들으면 BEANS_GRAMM_PER_SHOT같은 경우는 외부줄 의미도 아예 없다.
        그런 경우를 아래와 같이 public이 아닌 private로 변경

        class에서 보편적으로 명시하지 않는것은 public으로 간주하기 때문에 public을 사용할꺼면
        걍 쓰지마
	 */
	// class CoffeeMaker {
	// 	private static BEANS_GRAMM_PER_SHOT: number = 7 //class levet로 지정
	// 	private coffeeBeans: number = 0 //instance (object) level

	// 	constructor(coffeeBeans: number) {
	// 		this.coffeeBeans = coffeeBeans
	// 	}

	// 	static makeMachine(coffeeBeans: number): CoffeeMaker {
	// 		return new CoffeeMaker(coffeeBeans)
	// 	}

	// 	fillCoffeeBeans(beans: number) {
	// 		if (beans < 0) {
	// 			throw new Error('야이 음수 넣지마')
	// 		}
	// 		this.coffeeBeans += beans
	// 	}

	// 	makeCoffee(shots: number): CoffeeCup {
	// 		if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
	// 			throw new Error('Not enough coffee beans!')
	// 		}
	// 		this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
	// 		return {
	// 			shots,
	// 			hasMilk: false,
	// 		}
	// 	}
	// }
	// const maker = new CoffeeMaker(32)
	// console.log(maker)

	/*
    복습
    this.firstName으로 하면 User라는 틀로 구워진 오브젝트는 항상 firstName도 생성한다.
    하지만 firstName은 생성하지 않고 싶으면 static을 넣어서 class level로 만들고 
    this를 User로 즉 class name으로 변경해서 불러온다
    */
	class User {
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`
		}
		private internalAge = 4

		get age(): number {
			return this.internalAge
		}
		set age(num: number) {
			this.internalAge = num
		}
		constructor(private firstName: string, private lastName: string) {}
	}
	const user = new User('Steve', 'Jobs')
	user.age = 6
	console.log(user.fullName)
}
