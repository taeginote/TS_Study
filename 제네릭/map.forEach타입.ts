{
	/**
	 * map 메서드
	 */

	const arr = [1, 2, 3]
	const newArr = arr.map(it => it * 2)

	function map<T>(arr: T[], callback: (item: T) => T) {
		let result = []
		for (let i = 0; i < arr.length; i++) {
			result.push(callback(arr[i]))
		}
		return result
	}

	map(arr, it => it * 2)
}
