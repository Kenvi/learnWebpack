import _ from 'lodash'

function component(argument) {
	let ele = document.createElement('div')

	ele.innerHTML = _.join(['hello','webpack'],' ')

	return ele
}

document.body.appendChild(component());