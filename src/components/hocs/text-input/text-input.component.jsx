function TextInputComponent(props) {
  return props.use(
    { 
      FGcName: props.cls,
      label: props.title,
      required: props.required,
      type: "text", 
      className: "name-input", 
      value: "", 
      title: "Enter name ---", 
      placeholder: props.Pholder,
      cName: "",
      id:"",
      passwordHelpBlock:'',
      passwordHelpBlockID:'',
      passwordHelpBlockMessage: ''
     
    }
  )
}

export default TextInputComponent