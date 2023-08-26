{
	/**
	 * 프로미스
	 * Promise<number> 이거는 response가 number로 올꺼다 이렇게 정의하는것이다
	 */
	const promise = new Promise<number>((resolve, reject) => {
		setTimeout(() => {
			resolve(20)
		}, 3000)
	})

	promise.then(response => {
		console.log(response * 10) // 20
	})
}
