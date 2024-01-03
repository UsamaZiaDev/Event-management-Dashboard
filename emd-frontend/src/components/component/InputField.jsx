
const InputField = () => {
  return (
    <div className="col-md-4 mb-3">
        <h3> Input Component</h3>
        <label forhtml="name" className="form-label mb-1"> Title</label>
        <input 
            type="text"
            name="title" 
            // value={formData.title}  
            className="form-control" 
            id="name" 
            placeholder="Event Title"
            // onChange={handleChangeInput}
        />
    </div>
  )
}

export default InputField