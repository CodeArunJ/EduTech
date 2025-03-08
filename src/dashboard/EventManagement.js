import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card"; 
import { Button } from "../components/ui/button"; 
import { Input } from "../components/ui/input"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`; // Standard Date Format: DD-MM-YYYY
};

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    category: "",
    speakers: "",
    location: "",
    audienceLevel: "General",
    registrationLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.location) {
      toast.error("Please fill in all required fields!", { position: "top-right" });
      return;
    }

    setEvents([...events, { ...newEvent, date: formatDate(newEvent.date) }]);
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      category: "",
      speakers: "",
      location: "",
      audienceLevel: "General",
      registrationLink: "",
    });

    toast.success("Event posted successfully! 🎉", { position: "top-right" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <motion.h1
        className="text-3xl font-bold text-indigo-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Event Management
      </motion.h1>

      {/* Event Input Fields */}
      <div className="grid gap-4 mb-6">
        <Input name="title" value={newEvent.title} onChange={handleInputChange} placeholder="Event Title" />
        <Input name="description" value={newEvent.description} onChange={handleInputChange} placeholder="Event Description" />
        <label className="text-gray-700 font-semibold">📅 Event Date:</label>
        <Input name="date" type="date" value={newEvent.date} onChange={handleInputChange} />
        <label className="text-gray-700 font-semibold">⏰ Event Time:</label>
        <Input name="time" type="time" value={newEvent.time} onChange={handleInputChange} />
        <Input name="category" value={newEvent.category} onChange={handleInputChange} placeholder="Event Category (e.g., Tech, Business, Science)" />
        <Input name="speakers" value={newEvent.speakers} onChange={handleInputChange} placeholder="Speakers (comma-separated)" />
        <Input name="location" value={newEvent.location} onChange={handleInputChange} placeholder="Event Location (Physical/Online)" />
        <label className="text-gray-700 font-semibold">🎯 Audience Level:</label>
        <select name="audienceLevel" value={newEvent.audienceLevel} onChange={handleInputChange} className="p-2 border rounded-md">
          <option value="General">General</option>
          <option value="Beginners">Beginners</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <Input name="registrationLink" value={newEvent.registrationLink} onChange={handleInputChange} placeholder="Registration Link (Optional)" />
        <Button onClick={addEvent} className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
          Add Event
        </Button>
      </div>

      {/* Event List */}
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 border border-gray-200 rounded-lg shadow-md bg-indigo-50 hover:shadow-lg transition">
            <Card className="p-5 bg-white rounded-lg shadow-lg">
              <CardContent>
                <h2 className="text-xl font-semibold text-indigo-800">{event.title}</h2>
                <p className="text-gray-600 mt-1">{event.description}</p>
                <div className="mt-2">
                  <p className="text-gray-700"><strong>📅 Date:</strong> {event.date}</p>
                  <p className="text-gray-700"><strong>⏰ Time:</strong> {event.time}</p>
                  <p className="text-gray-700"><strong>📌 Category:</strong> {event.category || "N/A"}</p>
                  <p className="text-gray-700"><strong>🎤 Speakers:</strong> {event.speakers || "N/A"}</p>
                  <p className="text-gray-700"><strong>📍 Location:</strong> {event.location}</p>
                  <p className="text-gray-700"><strong>🎯 Audience Level:</strong> {event.audienceLevel}</p>
                  {event.registrationLink && (
                    <p className="text-blue-600 font-semibold">
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        🔗 Register Here
                      </a>
                    </p>
                  )}
                </div>
                <Button className="mt-3 w-full bg-green-600 text-white hover:bg-green-700 transition">
                  Connect with Organizer
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventManagement;
