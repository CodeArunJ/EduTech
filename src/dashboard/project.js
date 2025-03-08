import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card"; // Corrected import path
import { Button } from "../components/ui/button"; // Corrected import path
import { Input } from "../components/ui/input"; // Corrected import path
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`; // Standard Format: DD-MM-YYYY
};

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    members: "",
    skills: "",
    prerequisites: "",
    startDate: "",
    level: "Beginner",
    contact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    if (!newProject.title || !newProject.members || !newProject.contact || !newProject.startDate) {
      toast.error("Please fill in all required fields!", { position: "top-right" });
      return;
    }

    setProjects([...projects, { ...newProject, startDate: formatDate(newProject.startDate) }]);
    setNewProject({
      title: "",
      description: "",
      members: "",
      skills: "",
      prerequisites: "",
      startDate: "",
      level: "Beginner",
      contact: "",
    });

    toast.success("Project posted successfully! 🎉", { position: "top-right" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <motion.h1
        className="text-3xl font-bold text-indigo-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Project Management
      </motion.h1>

      {/* Input Fields */}
      <div className="grid gap-4 mb-6">
        <Input name="title" value={newProject.title} onChange={handleInputChange} placeholder="Project Title" />
        <Input name="description" value={newProject.description} onChange={handleInputChange} placeholder="Project Description" />
        <Input name="members" value={newProject.members} onChange={handleInputChange} placeholder="Team Members (comma-separated)" />
        <Input name="skills" value={newProject.skills} onChange={handleInputChange} placeholder="Skills Required (comma-separated)" />
        <Input name="prerequisites" value={newProject.prerequisites} onChange={handleInputChange} placeholder="Prerequisites (comma-separated)" />
        <label className="text-gray-700 font-semibold">📅 Project Start Date:</label>
        <Input name="startDate" type="date" value={newProject.startDate} onChange={handleInputChange} />
        <label className="text-gray-700 font-semibold">📊 Project Level:</label>
        <select name="level" value={newProject.level} onChange={handleInputChange} className="p-2 border rounded-md">
          <option value="Beginner">Beginner</option>
          <option value="Moderate">Moderate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <Input name="contact" value={newProject.contact} onChange={handleInputChange} placeholder="Project Owner Contact (Email/Phone)" />
        <Button onClick={addProject} className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
          Add Project
        </Button>
      </div>

      {/* Project List */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 border border-gray-200 rounded-lg shadow-md bg-indigo-50 hover:shadow-lg transition">
            <Card className="p-5 bg-white rounded-lg shadow-lg">
              <CardContent>
                <h2 className="text-xl font-semibold text-indigo-800">{project.title}</h2>
                <p className="text-gray-600 mt-1">{project.description}</p>
                <p className="text-gray-700 mt-2"><strong>👥 Team:</strong> {project.members}</p>
                <p className="text-gray-700"><strong>📌 Skills Required:</strong> {project.skills}</p>
                <p className="text-gray-700"><strong>✅ Prerequisites:</strong> {project.prerequisites}</p>
                <p className="text-gray-700"><strong>📅 Start Date:</strong> {project.startDate || "TBA"}</p>
                <p className="text-gray-700"><strong>📊 Level:</strong> {project.level}</p>
                <p className="text-gray-700"><strong>📞 Contact:</strong> {project.contact}</p>
                <Button className="mt-3 w-full bg-green-600 text-white hover:bg-green-700 transition">
                  Connect with Project Owner
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
