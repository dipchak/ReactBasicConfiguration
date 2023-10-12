function PasswordInputComponent(props) {
    const onPasswordChange = (value) => {
        props.change(value);
    }
    return props.use(
        { 
         change: onPasswordChange, 

         FGcName:props.cls,
         label: props.title,
         required: props.required,
         type: "password", 
         className: "name-input", 
         value: "", 
         title: "Enter name ---", 
         placeholder: props.Pholder,
         cName: "",
         id:"inputPassword5",
         passwordHelpBlock:'passwordHelpBlock',
         passwordHelpBlockID:'passwordHelpBlock',
         passwordHelpBlockMessage: ''
   

        })
}

export default PasswordInputComponent