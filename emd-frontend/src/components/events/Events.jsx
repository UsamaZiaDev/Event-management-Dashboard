// core / libraries
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// components
import EventsCard from './EventsCard'
import EventServices from '../../core/services/EventServices'
// style
import "./style/style.css"

const Events = () => {

  const [eventsList, useEventsList] = useState([])

    useEffect(()=>{   

      getEvents()

    },[])

    function getEvents () {
      EventServices.getEvents()
      .then(res =>{
        useEventsList(res?.data)
      })
      .catch(err =>{
        console.log("Error_Events_Response__", err)
      })
    }

    function handleDeleteEvent(currentId){
        EventServices.deleteEvent(currentId)
        .then( res => {
            getEvents()
        })
        .catch( err => {
            console.log("handleDeleteEvent_err__", err);
        })
    }  

  return (
    <div>
        <div className="event-heading-content text-center">
            <h5 className="text-secondary mb-0 fw-bold text-capitalize ">
                a representation of the event planning
            </h5>
            <h1> Event Schedules </h1>
          <Link to="/add"
                className="btn bg-secondary text-light mt-3 fw-bold text-capitalize"
            >
                    create event
            </Link>
        </div>

        <div className="event-card-listing mt-5">
            { eventsList?.map(eventObj => 
                  <EventsCard 
                    eventObj={eventObj} 
                    key={eventObj.id} 
                    handleDeleteEvent={handleDeleteEvent}
                  />
            ) }
        </div>
    </div>
  )
}

export default Events