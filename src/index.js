const express = require('express')

const app = express()

app.get('/', (req, res) => {
	return res.send('Hello World!')
})

app.listen(8000, () => {
	console.log('listening on port 8000')
})
