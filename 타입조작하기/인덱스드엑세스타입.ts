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
