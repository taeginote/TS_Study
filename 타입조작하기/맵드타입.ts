{
	/**
	 * 맵드 타입
	 */

	interface User {
		id: number
		name: string
		age: number
	}
	interface PartialUser {
		[key in keyof User]: User[key]
	}

	//한명의 유저 정보를 불러오는 기능
	function FetchUserInfo() {
		return {
			id: 312,
			name: 'Wall',
			age: 22,
		}
	}

	function UpdateUser(user: User) {}

	UpdateUser({ id: 1, name: 'tae', age: 32 })
}
