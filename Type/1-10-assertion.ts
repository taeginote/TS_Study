{
	//Type Assertions 💩

	function jsStrFunc(): any {
		return 'hello'
	}
	const result = jsStrFunc()
	console.log((result as string).length)
	console.log((<string>result).length)

	function findNembers(): number[] | undefined {
		return undefined
	}
	const numbers = findNembers()
	numbers!.push(2)
	//!를 넣는것은 장담한다는것이다.

	const button = document.querySelector('class')
	if (button) {
		button.nodeValue
	}
}
