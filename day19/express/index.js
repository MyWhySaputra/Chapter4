const express = require('express')
const app = express()
const port = 3000

//setiap GET request ke http://localhost:3000/ akan diarahkan ke handler ini
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//setiap GET request ke http://localhost:3000/products akan diarahkan ke handler ini
app.get('/products', (req, res) => {
    res.json([
        "Apple",
        "Samsung",
        "Xiaomi"
    ])
})

//setiap GET request ke http://localhost:3000/orders akan diarahkan ke handler ini
app.get('/orders', (req, res) => {
    res.json([
        {
            id: 1,
            paid: false,
            user_id: 1
        },
        {
            id: 2,
            paid: false,
            user_id: 1
        }
    ])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})