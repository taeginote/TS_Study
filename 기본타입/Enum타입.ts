//enum타입
//열거형 타입
//이건 타입스크립트에서만 제공하는 타입임, 자바스크립트에는 없다.
{
	/*
        권한에 대한 부분에서 number로 쓰는 경우가 많다.
        하지만 이 부분이 알아보기가 어렵다.
        그래서 enum을 활용해 실수 방지하자
        
    */
	enum Role {
		ADMIN = 0,
		USER = 1,
		GUEST = 2,
	}

	const user1 = {
		name: 'taek',
		// role: 0, //관리자
		role: Role.ADMIN,
	}
	const user2 = {
		name: 'hi',
		// role: 1, //일반 유저
		role: Role.USER,
	}
	const user3 = {
		name: 'hong',
		// role: 2, //게스트
		role: Role.GUEST,
	}
	//위와 같이 하니 자동완성도 가능하고, 이러한 역할 부여는 아주 편하다.
}
