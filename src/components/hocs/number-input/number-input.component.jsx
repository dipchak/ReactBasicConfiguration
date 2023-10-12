function NumberInputComponent(props) {
    const onPasswordChange = (value) => {
        props.change(value);
    }
    return props.use(
        { 
         change: onPasswordChange, 

         FGcName:props.cls,
         label: "Password",
         required:"required",
         type: "password", 
         className: "name-input", 
         value: "", 
         title: "Enter name ---", 
         placeholder: "Enter name ---",
         cName: "",
         id:"inputPassword5",
         passwordHelpBlock:'passwordHelpBlock',
         passwordHelpBlockID:'passwordHelpBlock',
         passwordHelpBlockMessage: ''
   

        })
}

export default NumberInputComponent