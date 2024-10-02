import express from 'express';
const router = express.Router();
import {v4 as uuidv4} from 'uuid';


const users = [
    {
        first_name: "Muhammad",
        last_name: "Umer",
        email: "Umerqazi@gmail.com"
    },  
    {
        first_name: "Mohsin",
        last_name: "Qamar",
        email: "mohsinqamar@gmail.com"
    }
]


router.get('/', (req, res)=>{
    res.send(users)
});




router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()})

    res.send(`${user.first_name} has been added to the database successfully`)
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundUser = users.find(user => user.id === id);

    res.send(foundUser)
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params;

    users.filter((user) => user.id === id);
    res.send(`${id} deleted successfully from database`)
})


router.patch ('/:id', (req, res) => {
    const {id} = req. params;

    const  {first_name, last_name, email} = req.body;

    const user = users.find((user) => user.id === id);

    if(first_name) user.first_name = first_name;

    if(last_name) user.last_name = last_name;

    if(email) user.email = email;

    res.send(`user with the ${id} has been updated`)
})


export default router;