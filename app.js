const Joi=require('joi')
const express=require('express')
const app=express()

app.use(express.json())

const num1=10
const num2=20

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const num = [
    {id: 1, number1: num1},
    {id: 2, number2: num2},
    {id: 3, Sum: num1+num2}
]

app.get ('/api/nos', (req, res) => {
    res.send (num)
})

app.get ('/api/nos/sum',(req,res)=>{
    res.send(num[2])
})

app.get ('/api/nos/:id', (req, res) => {
    const number = num.find (c => c.id === parseInt (req.params.id))
    if (!number) res.status(404).send('The number with the given ID is not present')
    res.send (number)
})


const port= process.env.PORT||3000
app.listen(port,()=>
    console.log(`Listening on port ${port}...`)
)