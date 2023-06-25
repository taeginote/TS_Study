{
	type LoadingState = {
		state: 'loading'
	}
	type SuccessState = {
		state: 'success'
		response: {
			body: string
		}
	}
	type FailState = {
		state: 'fail'
		reason: string
	}
	type ResourceLoadState = LoadingState | SuccessState | FailState

	function printLoginState(resourceLoadState: ResourceLoadState) {
		if (resourceLoadState.state === 'loading')
			return console.log(`🔥${resourceLoadState.state}`)
		if (resourceLoadState.state === 'success')
			return console.log(`✨${resourceLoadState.response.body}`)
		else return console.log(`💩${resourceLoadState.reason}`)
	}

	printLoginState({ state: 'loading' })
	printLoginState({ state: 'success', response: { body: 'loaded' } })
	printLoginState({ state: 'fail', reason: 'no network' })
}
