/**
 * 타입 좁히기
 * 서로소 유니온 타입
 * 태그드유니온타입이라고 불리는데
 * switch 혹은 if문으로 타입을 직관적으로 분리하기 좋고, 또한 타입을 좁히는것도 쉽다
 */

{
	//우리가 기본적으로 많이 쓰는형식은
	type Admin = {
		name: string
		kickOut: number
	}
	type Member = {
		name: string
		point: number
	}
	type Guest = {
		name: string
		visitCount: number
	}

	//이때 함수에서 admin혹은 member혹은 geust 세개중 하나가 props로 들어와서 값을 적는다고 하자
	// 그러면 이런식으로 아래 3개를 유니온으로 사용해서 작동할것이다. 아래와 같이 사용할것이다.
	type StatusProps = Admin | Member | Guest

	function Test(status: StatusProps) {
		if ('kickOut' in status) {
			console.log('Admin이네요.')
		}
		if ('point' in status) {
			console.log('Member이네요.')
		}
		if ('visitCount' in status) {
			console.log('Guest이네요.')
		}
	}
	//위에 코드가 틀린것은 아니다 하지만 직관적이지가 않다.
	//point, kickOut, visitCount 이것이 어디있는지 위에서 확인을 하고 따로 작성해야하는 것이다.
	//더 좋은 방법은
	type Admin1 = {
		status: 'ADMIN'
		name: string
		kickOut: number
	}
	type Member1 = {
		status: 'MEMBER'
		name: string
		point: number
	}
	type Guest1 = {
		status: 'GUEST'
		name: string
		visitCount: number
	}
	type StatusProps1 = Admin1 | Member1 | Guest1

	//이렇게 하면 좀더 직관적이다 하지만 이럴때는 switch문이 좀더 직관적인데 그 이유는 아래 써보겠다.
	function Test1(status: StatusProps1) {
		//if문
		if (status.status === 'ADMIN') {
			console.log('Admin이네요.')
		}
		if (status.status === 'MEMBER') {
			console.log('Member이네요.')
		}
		if (status.status === 'GUEST') {
			console.log('Guest이네요.')
		}

		//switch문
		switch (status.status) {
			case 'ADMIN': {
				console.log('관리자네요')
				break
			}
			case 'MEMBER': {
				console.log('회원이네요')
				break
			}
			case 'GUEST': {
				console.log('게스트네요')
				break
			}
		}
	}
}
