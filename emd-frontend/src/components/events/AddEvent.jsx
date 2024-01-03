import { useState } from 'react'
import EventServices from "../../core/services/EventServices"
import { useNavigate, Link, useParams } from 'react-router-dom'
import { LuMoveLeft } from "../component/Icons"
import { useEffect } from 'react'


const AddEvent = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [errorField, setErrorField] = useState({
    titleError: {required: false, minLength:false}
  })

  const [formData, setFormData]=useState({
    id:0,
    title: "",
    description: "",
    email:"",
    userId:0,
    createdDate: "",
    startTime: "",
    endTime: "",
    durationTime: "",
    location: "online",
    status: "active",
    video: "",
    joinSession: "",
    thumbnail: "",
    progressStatus: "active"
  })

  useEffect(() => {
      
      if(params.id){
        getEvent()
      }

  },[])

  const handleChangeUpdateForm = (event) => {
    event.preventDefault();
    
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }


    const handleSubmit = (event) => {

      event.preventDefault();

      handleValidation()

 
        // if(params.id){
        //   updateEvent(formData)
        // }else{
        //   AddEvent()
        // }
    }
    
    const AddEvent =()=>{

      EventServices.addEvent(formData)
      .then(res=>{
        console.log("frontend_res.message__", res)
        navigate('/')
      })
      .catch(err => {
        console.log("frontend_res.message_Err__", err.response.data.error.message)
      })
    }

    const updateEvent = (data) => {
      EventServices.updateEvent(data)
      .then(res => {
        navigate('/')
      })
      .catch( err => {
      })
    } 

    const getEvent = () => {
      EventServices.getEvent(params.id)
      .then(res => {
        console.log("form_get_res__", res.data[0]);
        setFormData(res.data[0])
      })
      .catch(err => {
        console.log("form_get_err__", err);
      })
    }



    const handleValidation = () => {

      const {  title, description, email, location, status, thumbnail } = formData

      if(title == ""){
        setErrorField(  preData => ({
          ...preData,
          titleError:{ ...preData.titleError, required: true, minLength:false }
        }) )
        return
      }

      if(title.length <= 2 ){

        setErrorField(  preData => ({
          ...preData,
          titleError:{ ...preData.titleError, required: false, minLength:true }
        }) )

      }else if(title.length >3 ){

        setErrorField(  preData => ({
          ...preData,
          titleError:{ ...preData.titleError, required: false, minLength:false }
        }) )

      }
      

    }
    
console.log("error_Fields__", errorField);

  return (
    <div>
        <div className="back-icon-wrapper mb-4">
          <Link to="/" className="text-dark fs-4 text-decoration-none">
            <LuMoveLeft className="fs-1" /> 
            <span className="fs-4"> Back </span>
          </Link>
        </div>
      <form className="row" onSubmit={handleSubmit}>

        <div className="col-md-4 mb-3">
          <label forhtml="name" className="form-label mb-1"> Title</label>
            <input 
              type="text"
              name="title" 
              value={formData?.title}  
              className="form-control" 
              id="name" 
              placeholder="Event Title"
              onChange={ handleChangeUpdateForm }
            />
            { errorField.titleError.required && <small className="text-danger fw-bold"> required field </small>}
            { errorField.titleError.minLength && <small className="text-danger fw-bold"> minlength 3 </small>}
        </div>

        <div className="col-md-4 mb-3">
          <label forhtml="description"  className="form-label mb-1"> Description</label>
          <input 
            type="text"
            name="description" 
            value={formData?.description}  
            className="form-control"
            id="description" 
            placeholder="Event Description"
            onChange={ handleChangeUpdateForm }
          />
        </div>

          <div className="col-md-4 mb-3">
            <label forhtml="email" className="form-label mb-1"> Email</label>
            <input 
              type="text" 
              className="form-control" 
              name="email" 
              id="email" 
              placeholder="Event Email" 
              value={formData?.email}  
              onChange={ handleChangeUpdateForm }
            />
          </div>

          <div className="col-md-4 mb-3">
            <label forhtml="est" className="form-label mb-1"> Start Time</label>
            <input 
              type="text" 
              className="form-control" 
              name="startTime" 
              value={formData?.startTime}  
              id="est" 
              placeholder="Event Start Time" 
              onChange={ handleChangeUpdateForm }
              />
          </div>

          <div className="col-md-4 mb-3">
            <label forhtml="eet" className="form-label mb-1"> End Time</label>
            <input 
              type="text" 
              className="form-control" 
              name="endTime"
              value={formData?.endTime}   
              id="eet" 
              placeholder="Event End Time" 
              onChange={ handleChangeUpdateForm }
            />
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label mb-1"> Location</label>
              <select className="form-select" name="location" onChange={ handleChangeUpdateForm } >
              <option value="online">online</option>
              <option value="onSite" >onSite</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label mb-1"> Event status</label>
              <select className="form-select" name="status" onChange={ handleChangeUpdateForm } >
                <option value="active" >Active</option>
                <option value="upcoming">Upcoming</option>
                <option value="disabled">Disabled</option>
              </select>
          </div>

          <div className="col-md-4 mb-3">
            <label forhtml="evl" className="form-label mb-1"> video Link</label>
            <input 
              type="text" 
              className="form-control" 
              name="video" 
              value={formData?.video}   
              id="evl" 
              placeholder="Event video Link" 
              onChange={ handleChangeUpdateForm }
            />
          </div>

          <div className="col-md-4 mb-3">
            <label forhtml="elj" className="form-label mb-1"> Live join</label>
            <input 
              type="text" 
              className="form-control" 
              name="joinSession"
              value={formData?.joinSession}   
              id="elj" 
              placeholder="Event Live join" 
              onChange={ handleChangeUpdateForm }
            />
          </div>

          <div className="col-md-4 mb-3">
            <label forhtml="et" className="form-label mb-1"> Thumbnail</label>
            <input 
              type="text" 
              className="form-control" 
              name="thumbnail" 
              value={formData?.thumbnail}  
              id="et" 
              placeholder="Event Thumbnail" 
              onChange={ handleChangeUpdateForm }
            />
          </div>

        <div className="col-12 text-center mt-4">
          <input 
            type="submit" 
            className="w-50 m-auto form-control btn btn-lg btn-dark" 
            value={params.id ? "update Event" : "Submit"}
          />
        </div>    
      </form>

    </div>
  )
}

export default AddEvent
