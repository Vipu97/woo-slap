import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import EventsList from "../Components/EventsList";
import CustomSpinner from "../Components/CustomSpinner";

const HomePage = () => {
  const navigate = useNavigate();
  const [events,setEvents] = useState(null);
  const [loading,setLoading] = useState(true);

  const createNewEvent = async () => {
    const {data} = await axios.post('/event');
    const eventCode = data.eventCode;
    navigate(`/event/${eventCode}`);
  }
  const deleteEvent = async(eventId) => {
    await axios.delete(`/event/${eventId}`);
  }
  useEffect(() => {
    const fetchEvents = async() => {
      const {data} = await axios.get("/event");
      setEvents(data);
      setLoading(false);
    }
    fetchEvents();
  },[]);
  
  if(loading)
     return <CustomSpinner />
  return (
    <div className="px-3 xs:px-8">
      <Layout />
      <div >
        <h1 className="font-black text-[23px] my-2.5 mt-10">My events ({events?.length})</h1>
        <button className="flex gap-1 border-2 border-transparent rounded-3xl py-1.5 px-3 bg-blue" onClick={createNewEvent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-black text-white">
          Create event
          </span>
        </button>
      </div>
      <EventsList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default HomePage;
