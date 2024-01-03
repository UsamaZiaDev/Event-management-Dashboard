// core / libraries
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// components
import VideoPlayer from '../component/VideoPlayer';
import EventServices from '../../core/services/EventServices'
// icons
import {FaYoutube, FaMapMarkerAlt, MdOutlineAccessTimeFilled, BiLogoZoom, IoTodaySharp, LuMoveLeft } from "../component/Icons"

const ViewEvent = () => {

  const [eventObj, setEventObj] = useState()

  const params = useParams()
  const eventId =+params.id 

  useEffect(() => {
    EventServices.getEvent(eventId)
    .then((res) => {
      // console.log("get_Detail_res__", res?.data);
      setEventObj(res?.data["0"]);
    }).catch((err) => {
      console.log("getEvent_Detail_Error", err)
    });
  },[])
  
  return (
    <div>
        <div className="row mt-5">
          <div className="col-12">
              <div className="back-icon-wrapper mb-4">
                <Link to="/" className="text-dark fs-4 text-decoration-none">
                  <LuMoveLeft className="fs-1" /> 
                  <span className="fs-4"> Back </span>
                </Link>
              </div>
          </div>
          <div className="col-md-6 align-self-center">

            <div className="event-content">
              <h1 className=" w-75 fw-bold "> {eventObj?.title } </h1>
              <h5 className="w-75 "> {eventObj?.description }</h5>
              <div className=" mt-3 time-location d-flex ">
                  <p className="date fw-bold text-capitalize"> 
                    <IoTodaySharp   className="text-secondary fs-5 me-2" />
                    { eventObj?.createdData } 
                  </p>
                  <div className="time mx-4">
                      <MdOutlineAccessTimeFilled className="text-secondary fs-5"/>
                      <span className=" fw-bold" > 09:30 - 12:30 PM </span>
                  </div>
                  { eventObj?.address &&
                      <div className="location">
                          <FaMapMarkerAlt  className="text-secondary fs-5" />
                          <span  className=" fw-bold" > { eventObj?.address } </span>
                      </div>
                  }
              </div>
            </div>

            <div className="join-social-media">
                <h5 className="fw-bold text-secondary">
                    Live Stream
                </h5>
                <FaYoutube className="youtube"/>
                <BiLogoZoom className="zoom"/>
            </div>
          </div>
          
          <div className="col-md-6">
            <VideoPlayer videoId={eventObj?.video} />
          </div>
        </div>

      </div>
  )
}

export default ViewEvent