import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import '../Misc/Styles/Formstyle.css'
import Toggle from './Toggle'



var countDownDate= new Date(getFirstDayOfNextMonth())

// var countDownDate= new Date('Dec 12, 2022 13:26:35')

var now=  new Date().getTime()



let secondss= Math.abs(countDownDate - now);

// console.log("Expires in "+Math.floor(secondss/1000)+" seconds");

function getFirstDayOfNextMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  }

const Add = () => {
    const history = useNavigate()
    const [inputs, setinputs] = useState({
        name: '',
        age: '',
        batch: '',
        phone: '',
    })


    const axiosrequest = async () => {
        await axios.post('http://localhost:8000/add', {
            name: String(inputs.name),
            age: Number(inputs.age),
            batch: String(inputs.batch),
            phone: Number(inputs.phone)

        }).then(res => res.data)
    }

    const handlechange = (e) => {
        setinputs((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }

    const agechange = (e) => {
        setinputs((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
        if ((e.target.value < 12 || e.target.value > 65)) {
            seterror(true)
            setlabell('Age should be b/w 18 and 65')
            setdis1(true)
        }
        else {
            seterror(false)
            setlabell('')
            setdis1(false)
        }

    }


    const submithandler = (e) => {
        e.preventDefault()
        setdis1(true)
        // console.log(inputs);
        axiosrequest().then(() => history('/'))
        window.alert('Submitted!!!')

        setdisable(true)
        setTimeout(() => {
            setdisable(false)
            setdis1(false)
        }, secondss);
        // setTimeout(() => {
        // }, secondss);

    }

    
    const payhandler = (e) => {
        setbutval('paid')
        // setdis1('true')
        settimer(true)
        
    }
    
    // const [pay, setpay] = useState(false)
    const [butval, setbutval] = useState('Pay 500')
    const [disable, setdisable] = useState(false)
    const [dis1, setdis1] = useState(true)
    const [error, seterror] = useState(false)
    const [labell, setlabell] = useState('')
    const [timer, settimer] = useState(false)
    

    return (
        <div id='addid'>

            <div className="container">
                <h1>Join Us</h1>

                <form onSubmit={submithandler}>
                    <div className="row">
                        <div className="column">

                            <TextField value={inputs.name} disabled={disable} onChange={handlechange} id="outlined-basic" label="Name" variant="filled"
                                className='textfield' name="name" required placeholder="Enter your name" />
                        </div>
                        <div className="column">

                            <TextField error={error} value={inputs.age} disabled={disable} onChange={agechange} id="outlined-basic" type='number' label="Age" variant="filled"
                                className='textfield' helperText={labell} name='age' required placeholder="Your your age here" />
                        </div>

                    </div>
                    <br />
                    <div className="row">
                        <div className="column">

                            {/* <TextField value={inputs.batch} disabled={disable} onChange={handlechange} id="outlined-basic" label="Batch" variant="filled"
                                className='textfield' name="batch" required placeholder="Your batch here" type='number' /> */}


                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Batch</InputLabel>
                                <Select
                                    name='batch'
                                    disabled={disable}
                                    value={inputs.batch}
                                    onChange={handlechange}
                                    label='batch'
                                >
                                    <MenuItem value={"6AM-7AM"}>6AM-7AM</MenuItem>
                                    <MenuItem value={"7AM-8AM"}>7AM-8AM</MenuItem>
                                    <MenuItem value={"8AM-9AM"}>8AM-9AM</MenuItem>
                                    <MenuItem value={"5PM-6PM"}>5PM-6PM</MenuItem>
                                </Select>
                            </FormControl>



                        </div>
                        <div className="column">

                            <TextField value={inputs.phone} disabled={disable} onChange={handlechange} required id="outlined-basic" label="Phone" variant="filled" className='textfield'
                                name="phone" placeholder="Your phone number here" />
                        </div>
                    </div>
                    <br />
                    <button type='button'disabled={dis1} required onClick={payhandler}>{butval}</button>

                    {timer && <Toggle />}
                    <br /><br />
                    <button disabled={dis1}>Submit</button> 

                </form>
            </div>
        </div>
    )
}

export default Add

