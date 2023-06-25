{
	//Array
	const fruits: string[] = ['토마토', '바나나']
	const fruitss: Array<string> = ['토마토', '바나나']

	//readonly즉 읽기 전용을 만들때는 string[]이런 형태만 가능하다
	function printArr(fruits: readonly string[]) {}

	//Tuple
	//배열이긴 배열인 서로 다른 타입을 가질수있는 배열이다.
	//useState 경우는 Tuple을 잘사용한 예시이다.
	let student: [string, number]
	student = ['dsa', 1]
	student[0] //'dsa'
	student[1] //1
	//결론 Tuple은 권장하지 않아요.
	//데이터에 접근할때 인덱스 접근은 너무 가독성 떨어진다.
	// 사실 console.log()로 뽑으면 볼만한데 사실 매번 그렇지 않기때문에
	//student.name이런식으로 정확한 키로 설정하는 방법이 더 좋다.
	const [name, age] = student
}
