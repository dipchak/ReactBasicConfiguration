function TextAreaComponent(props) {
  return props.use(
    { 
      FGcName: props.cls,
      label: props.title,
      required: props.required,
      type: "textarea", 
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

export default TextAreaComponent