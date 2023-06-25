{
	// 	//💩
	// 	//js에서 문제점
	// 	/*
	//     함수명을 봐라
	//     숫자를 받아서 더하는 함수이다
	//     하지만 둘중 하나가 string형식으로 들어온다면?
	//     문자열을 이어주는 함수로 원하는 로직이 아닌것이 되어버린다. 하지만 js에서는 오류가 나지않기 때문
	//     */
	// 	function jsAdd(num1, num2) {
	// 		return num1 + num2
	// 	}

	// 	//Ts✨
	// 	function add(num1: number, num2: number): number {
	// 		return num1 + num2
	// 	}

	// 	//JS💩
	// 	function jsFetchNum(id) {
	// 		//code...
	// 		//code...
	// 		//code...
	// 		return new Promise((resolve, reject) => {
	// 			resolve(100)
	// 		})
	// 	}

	// 	//Ts✨
	// 	function jsFetchNum1(id: string): Promise<number> {
	// 		//code...
	// 		//code...
	// 		//code...
	// 		return new Promise((resolve, reject) => {
	// 			resolve(100)
	// 		})
	// 	}

	// JS✨ => Ts
	// Optional parameter
	function printNam(firstName: string, lastName?: string) {
		console.log(firstName)
		console.log(lastName)
	}
	printNam('Steve', 'dsa')
	printNam('dsadas')
	//위에꺼 원래는 이건 에러가 뜸
	//하지만 Optional parameter를 이용하면 전달 하던 말던 오류가 없어지징

	//Default parameter
	function printms(message: string = 'default message') {
		console.log(message)
	}
	printms()

	//Rest parameter
	function addNumbers(...number: number[]): number {
		return number.reduce((a, b) => a + b)
	}
	console.log(addNumbers(1, 2))
	console.log(addNumbers(1, 2, 3))
	console.log(addNumbers(1, 2, 3, 4, 5))
	console.log(addNumbers(1, 2, 4, 4))
}
