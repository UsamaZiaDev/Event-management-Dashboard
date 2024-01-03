import { useState } from "react";
// core / libraries
import { Link } from "react-router-dom";
// icons
import {FaYoutube, FaMapMarkerAlt, MdOutlineAccessTimeFilled, BiLogoZoom,  FaTrashCan, FaEdit} from "../component/Icons"

import eventServices from "../../core/services/EventServices";

const EventsCard = ({eventObj, handleDeleteEvent, handleUpdateEvent}) => { 

  return (
    // <Link to={`./view/${eventObj?.id}`} className="text-dark text-decoration-none"> 
    <div>
        <div className="event-cards-wrapper d-flex">
            <div className="event-day-con w-25 ps-4 ms-3 align-self-center">
                <h2 className="text-secondary fw-bold mb-0">Event Day</h2>
                <h5 className="date fw-bold text-capitalize"> { eventObj?.createdData } </h5>
                <div className="join-social-media">
                    <p className="fw-bold text-secondary mb-1 mt-4">
                        Live Stream
                    </p>
                    <FaYoutube className="youtube"/>
                    <BiLogoZoom className="zoom"/>
                </div>
            </div>
            <div className="event-card-content-wrapper d-flex w-100 position-relative">
                <div className="thumbnail">
                    <img src={eventObj?.thumbnail} className="w-100 h-100"/>
                </div>
                <div className="event-content w-100 p-5 pt-4">
                    <Link to={`./view/${eventObj?.id}`} className="text-dark text-decoration-none">
                        <h3> {eventObj?.title } </h3>
                    </Link>
                    <p> {eventObj?.description }</p>
                    <div className="time-location d-flex ">
                        <div className="time me-4">
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
                    <div className="ievent-action-wrapper action-wrapper">
                        <FaTrashCan className="fs-5 text-secondary mt-3" onClick={()=> handleDeleteEvent(eventObj?.id) }/>
                         {/* <FaEdit  className="fs-5 text-secondary mx-2 mt-3" onClick={()=> handleUpdateEvent(eventObj) }/> */}
                        <Link to={`/update/${eventObj?.id}`}>
                            <FaEdit  className="fs-5 text-secondary mx-2 mt-3"/>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
    // </Link>
  )
}

export default EventsCard