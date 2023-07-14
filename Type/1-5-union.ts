{
	//Union Types: OR
	type Way = 'left' | 'right' | 'up' | 'down'

	type kind = 'book'|'car'
	function move(direction: Way) {
		console.log(direction)
	}
	move('down')

	type TileSize = 8 | 10 | 32
	const tile: TileSize = 8

	// function:login -> success, fail
	type Success = {
		response: {
			body: string
		}
	}
	type Fail = {
		reason: string
	}
	type LoginState = Success | Fail

	function login(): LoginState {
		return {
			response: {
				body: 'logged in!',
			},
		}
	}

	// printLoginState(state)
	// success -> 👍body
	// fail -> ❌reason
	function printLoginState(state: LoginState) {
		if ('response' in state) {
			console.log(`👍 ${state.response.body}`)
		} else {
			console.log(`❌ ${state.reason}`)
		}
	}
}
