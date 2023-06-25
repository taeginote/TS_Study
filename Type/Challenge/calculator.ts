{
	//일단 나는 union을 사용하여 첫번째 매개변수는 정해진 값이기 때문에 union이 더 맞다고 생각했다.
	//하지만 전부 if문으로 넣었을때 함수 return을 numer type으로하니 오류가 뜬다.
	//이건 if문에 해당하지 않는다는것을 가정했을때 return이 없으니 그건 void형식이여서 오류가 뜬거 아닌가 싶다.
	//그래서 if문 4개 else하나로 했는데 조건이 많다보니 case문이 더 적합하다는것을 느낀다.
	type Kind = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'
	function calculate(kind: Kind, num1: number, num2: number): number {
		if (kind === 'add') return num1 + num2
		if (kind === 'substract') return num1 - num2
		if (kind === 'multiply') return num1 * num2
		if (kind === 'divide') return num1 / num2
		else return num1 % num2
	}

	console.log(calculate('add', 1, 3)) //4
	console.log(calculate('substract', 3, 1)) //2
	console.log(calculate('multiply', 4, 2)) //8
	console.log(calculate('divide', 4, 2)) //2
	console.log(calculate('remainder', 5, 2)) //1
}
