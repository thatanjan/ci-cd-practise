const express = require('express')

const app = express()

const add = (x, y) => x + y

export const functions = {
	add,
}

export default { app: 'app' }

app.get('/', (req, res) => {
	return res.send('Hello World!')
})

// app.listen(8000, () => {
// 	console.log('listening on port 8000')
// })
