import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Alert, Button, Card, TextArea, TextField } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "../App.css";
const DemoContact = () => {
  const [successMessage, setSuccessMessage] = React.useState("Success");

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [sub, setSub] = React.useState("");
  const [desc, setDesc] = React.useState("");


  const serviceID = "siddharth_308";
  const templateID = "template_a104iza";
  const userID = "user_ZiINrBsMFdhQQlYNuEm0q";
  var templateParams =  {
    name: name,
    email: email,
    subject: sub,
    description: desc,
  };
  const onSubmit = (e) => {
    
    e.preventDefault();
  
   
     sendEmail()
    
    //alert("Suuccessfully Sent")
  };
  const sendEmail = () => {
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        alert(
          "Form Sent Sucessfully I will contact you as soon as possible"
        );
        setEmail("")
        setName("")
        setDesc("")
        
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };
  // console.log(window.screen.width)
 
 
      var wid = window.screen.width > 768 ? 300 : 280

 
  return (
    <div>
      <div>
        <section class="contact section" id="contact">
          <h2 class="section-title">Contact</h2>

          {/* <Alert closable type="success">{successMessage}</Alert> */}
          <div class="contact__container bd-grid">
            <Card action="" class="contact__form">
              <TextField
                width={wid}
                height="60"
                type="text"
                placeholder="Name"
                
                className="contact__input"
                value={name}
                append
                onChange={(e) => setName(e.value)}
              >
                {" "}
              </TextField>
              <TextField
                width={wid}
                height="60"
                type="email"
                placeholder="Email"
                className="contact__input"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.value)}
              />
              <TextArea
                width={wid}
                height="160"
                cols="0"
                rows="10"
                className="contact__input"
                id="subject"
                type="text"
                placeholder="Any message for me!!"
                name="subject"
                value={desc}
                onChange={(e) => setDesc(e.value)}
              ></TextArea>
              {/* <input
                type="button"
                value="Enter"
                class="contact__button button"
                onClick={onSubmit}
              /> */}
              <Button onClick={onSubmit} style={{width:"120px"}} className="contact__button button">Enter</Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoContact;
