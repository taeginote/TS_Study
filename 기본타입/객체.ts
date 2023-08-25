let user: object = {
	id: 1,
	name: 'wall',
}
let user1: { id: number; name: string } = {
	id: 1,
	name: 'wall',
}

let dog: {
	name: string
	color: string
} = {
	name: 'bock',
	color: 'white',
}
user.id // 이것은 오류가 뜬다 즉 그냥 object는 객체를 말하는것이 안에 값을 알수는 없다.
user1.id // 즉, 객체 리터럴 타입으로 지정해주는것이다,

//이름을 기준으로 타입을 정의하는것은 명목적 타입 시스템이다.
//즉, TS는 구조적 타입 시스템을 사용한다.
