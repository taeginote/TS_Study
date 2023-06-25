{
	//Enum (여러가지의 상수 값들을 한곳에 모아서 놔둔다?)

	//JS
	const MAX_NUM = 6
	const MAX_STUDENTS_PER_CLASS = 10
	const MONDAY = 0
	const TUESDAY = 1
	const WEDJESDAY = 2
	const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDJESDAY: 2 })
	const dayOfToday = DAYS_ENUM.MONDAY

	//Ts
	enum Days {
		Monday,
		Tuesday,
		Wendnesday,
		Thursday,
		Friday,
	}
	console.log(Days.Thursday)
	const day = Days.Monday

	//하지만 Ts에서는 enum을 쓰지않는것이 좋다
	//enum의 문제는 타입을 보장하기 힘들다.
	// 그래서 union타입을 통해서 작성할수있다.
	type DaysEnum = 'Monday' | 'Tus'
}
