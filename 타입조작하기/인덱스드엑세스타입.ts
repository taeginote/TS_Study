{
	/**
	 * 인덱스드 엑세스 타입
	 * 객체 배열 튜플 사용 가능
	 *
	 * post Type의 author만 포함하고 싶을때?
	 * 이때 인덱스트 엑세스 타입을 사용한다
	 */

	interface Post {
		title: string
		contents: string
		author: {
			id: number
			writer: string
		}
	}

	//아래가 인덱스트 엑세스 타입이다,
	//author의 기본 타입이 변경 될때도 즉시 반영이 되는 장점이있어서 원본 타입을 따라가니 좋다.
	//인덱스를 이용해 접근하는 타입이라고 해서 인덱스트 엑세스 타입이라고 부른다.
	//인덱스드 엑세스 타입 주의점
	//Post['author']에서 author은 값이 아니라 타입이다.
	//즉 저거는 값을 넣는것이 아니라 타입을 넣는것이다. 위와 같이 interface Post에서 author이런식으로
	//인덱스에 존재하지 않는 타입을 넣어도 오류가 뜬다.
	//응용 할수있는 것은 중첩도 가능하다.
	//만약 writer만 가져오고싶다 그러면
	//author: Post['author']['writer'] 이런형식으로 중첩하는것이다.
	function Test(author: Post['author']) {
		console.log(author.writer)
	}

	const post: Post = {
		title: 'string',
		contents: 'string',
		author: {
			id: 1,
			writer: 'string',
		},
	}
}
