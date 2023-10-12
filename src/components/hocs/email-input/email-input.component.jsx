function EmailInputComponent(props) {
    const onEmailChange = (value) => {
        props.change(value);
    }
    return props.use(
        {   change: onEmailChange, 
            FGcName: props.cls,
            label: props.title,
            required: props.required,
            type: "email", 
            className: "name-input", 
            value: "", 
            title: "", 
            placeholder: props.Pholder,
            cName: "",
            id:"inputEmail5",
            passwordHelpBlock:'',
            passwordHelpBlockID:'',
            passwordHelpBlockMessage: '',
        
        })
}

export default EmailInputComponent