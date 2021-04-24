import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Contact.css"


const Contact = () => {
    return (
        <div className="contactCont" id="contact">
            <h2>Contact</h2>
            <p>Have a question? Get in touch.</p>
            <div className="formCont">
                <div className="upperInput">
                    <div className="nameInput">
                        <p>Name</p>
                        <TextField id="outlined-basic" variant="outlined" name="name" fullWidth />
                    </div>
                    <div className="emailInput">
                        <p>Email</p>
                        <TextField id="outlined-basic" variant="outlined" name="email" fullWidth />
                    </div>
                </div>
                <div style={{marginBottom: "1em"}}>
                    <p>Message</p>
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </div>
                <Button variant="contained" fullWidth style={{backgroundColor: "black", color:"white"}}>
                    Send
                </Button>
            </div>
            <div className="socialLinks">
                <div>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github"></i>
                </div>
                <div>
                    <i class="fas fa-envelope" style={{marginBottom:"0", height:"auto"}}></i>
                    <p style={{marginBottom:"0.5em"}}>mandarsatam97@gmail.com</p>
                </div>
                <div>
                    <i class="fas fa-phone"></i>
                    <p>+91 8425028144</p>
                </div>
            </div>
        </div>

    )
}

export { Contact }
