{
	function test2(person: string) {
		return console.log(person)
	}
	test2('2')

	interface person {
		firstName: string
		lastName: string
	}
	function test3(person: person) {
		return console.log(person.firstName, person.lastName)
	}
	test3({ firstName: 'hi', lastName: 'hello' })
}

/*
배열
배열을 쓰는 방법으로는 만약 number 배열이다.
그러면 두개의 방법이 존재 number[] 혹은 제네릭 형식으로 Array<number>

튜플
튜플을 통해서는 요소의 개수와 고정된 배열의 값을 표현할수있다는 점이있습니다.
그래서 배열안에 모두 같은 타입으로만 정리하는것이 아닌 [number, string, number] 이런 형식으로 3개의 값을 고정하고, 타입도 다 다른 타입으로 지정할수 있다는 점이 있습니다.

enum은 
표준 자료형 집합과 사용하면 도움이 될만한 친구이다.
그 이유 기본으로 0으로 시작해서 멤버들에게 번호를 쭉쭉 준다.
하지만 무조건 0부터 시작하라는 말은 아니다 변경할수있다.
ex) enum Color{red=1, green,blue}
즉 위에같이 처음에 1을 지정하면 0으로 시작하는것이 아닌 1로 시작하겠죠?
enum은 하나의 매겨진 값을 사용해 enum 멤버 이름을 알아낼수있다는 점이다.

any
any는 사실 타입스크립에서 쓰는것은 의미가 별로 없는 놈이다. js처럼 타입을 검사하지 않겠다는 뜻과 같으니깐

void
void는 어떤 타입도 존재할수 없다 라는 것이므로, 즉 any와 반대인 성격이라고 생각해라
void같은경우는 보통 함수에서 반환값이 없을때 사용한다. 왜냐? 함수의 return 값이 없으면 어떤 타입으로 지정해줄 예정인가?
void로 해라
void같은경우는 즉 null, undefined를 사용하는것이지

Never
never은 절대 발생할수 없는 타입을 나타낸다.

타입 단언 보다는 타입 선언을 하자~
interface Person { 
    name: string;
}

const alice: Person = { name: 'Alice' }; // 타입은 Person   이런 선언 
const bob = { name: 'Bob' } as Person  ; // 타입은 Person   이런 단언
위에 코드를 보자 Person의 타입은 동일하고 둘다 동일한것 같지만 둘은 다르다
타입단언 말고 타입 선언을 쓰자는 의미는 어떤걸까?
타입단언은 타입체크를 할수 없다.
타입단언은 강제로 타입을 지정한것이므로 타입 체크에서 오류를 무시하라는것이다.\
변수에 !를 쓴거를 본적이 있을것이다. 나 또한 지금 쓰는중이였다.
이것을 사용하면 단언이라는것이다.
컴파일 과정중에는 제거한다. 그리고 이것은 무조건 null은 아니라는것을 확정하는것이다.
그래서 결론 개발자가 타입스크립트보다 더 타입을 잘 알고있는곳 같으면 단언해라

읽기전용 인터페이스
프로퍼티 앞에 readonly 넣어서 지정해준다.

readonly vs const
그러면 readonly와 const 둘중 어떤것을 사용해야하는것인가?
이것은 변수와 프로퍼티의 차이라고 생각하자
변수는 const를 사용하고 프로퍼티는 readonly를 사용하자

인터페이스 확장
인터페이스의 확은 클래스 형식처럼
extends를 활용하여 쓸수있다.
ex)
interface person {
	name:string
}
interface people extends person{
	age:number
}
위에 같은 코드는 people에 name부터 age 둘다 사용할수 있는 인터페이스 확장을 한것이다.

?는 인수가 없어도 에러를 발생하지 않겠다 라는 의미 입니다.

함수에서의 타입 추론
function sum(a: number, b = 100): number { // 매개변수 기본 값이 있으면 굳이 인자 타입을 선언하지 않아도 된다 (타입 추론)
   return a + b;
}
위에처럼 매개변수에 기본값이 들어있는 경우는 타입추론을 하기 때문에 number 형식으로 타입이 지정되는것이다.

타입추론
타입 추론이란? 개발자의 굳이 변수선언을 할때 컴파일이 스스로 판단해서 타입을 지정해주는것이다.

꺽쇠 <>로 단연하는 방법, 

enum타입
특정 값을 고정하는 또다른 독립된 자료형

기본적인 enum은 배열의 인덱스 같이 멤버들의 번호를 매긴다. 
멤버들의 번호를 매긴다.

타입추론은 개발자가 타입 지정을 하지 않아도 스스로 인지한다는 것인데
이것은 함수의 리턴에서도 사용을 한다.
number 타입 두개를 더한것을 리턴하는 함수의 경우 타입 추론이 된다.

타입스크립트가 타입 추론하는 
 */
