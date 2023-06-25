{
	// function:login -> success, fail
	type Success = {
		result: 'success'
		response: {
			body: string
		}
	}
	type Fail = {
		result: 'fail'
		reason: string
	}
	type LoginState = Success | Fail

	function login1(): LoginState {
		return {
			result: 'success',
			response: {
				body: 'logged in!',
			},
		}
	}

	// printLoginState(state)
	// success -> 👍body
	// fail -> ❌reason
	function printLoginState1(state: LoginState) {
		if (state.result === 'success') {
			console.log(`👍 ${state.response.body}`)
		} else {
			console.log(`❌ ${state.reason}`)
		}
	}
}
