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

 */
