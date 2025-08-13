import React, { useState, useRef } from "react";

import data from "../data/data.json";
import { Search, Menu } from "lucide-react";
import JobCard from "./JobCard";
import Sidebar from "./SideBar";

const JobTrackerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverColumn, setDragOverColumn] = useState(null);
  const dragCounter = useRef(0);

  const [jobApplications, setJobApplications] = useState(data.jobs);

  const columns = [
    { id: "applied", title: "Applied", color: "bg-blue-500", count: 0 },
    {
      id: "interviewing",
      title: "Interviewing",
      color: "bg-yellow-500",
      count: 0,
    },
    { id: "offer", title: "Offer", color: "bg-green-500", count: 0 },
    { id: "rejected", title: "Rejected", color: "bg-red-500", count: 0 },
  ];

  // Update column counts
  columns.forEach((column) => {
    column.count = jobApplications.filter(
      (job) => job.status === column.id
    ).length;
  });

  const filteredJobs = jobApplications.filter(
    (job) =>
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getJobsByStatus = (status) => {
    return filteredJobs.filter((job) => job.status === status);
  };

  const handleDragStart = (e, job) => {
    setDraggedItem(job);
    e.dataTransfer.effectAllowed = "move";
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    setDraggedItem(null);
    setDragOverColumn(null);
    dragCounter.current = 0;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragEnter = (e, columnId) => {
    e.preventDefault();
    dragCounter.current++;
    setDragOverColumn(columnId);
  };

  const handleDragLeave = () => {
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setDragOverColumn(null);
    }
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedItem && draggedItem.status !== newStatus) {
      setJobApplications((prev) =>
        prev.map((job) =>
          job.id === draggedItem.id ? { ...job, status: newStatus } : job
        )
      );
    }
    setDragOverColumn(null);
    dragCounter.current = 0;
  };

  return (
    <div className="w-full h-full flex">
      <Sidebar
        columns={columns}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-1 rounded-md hover:bg-gray-100 mr-4"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold text-gray-900">
                Application Dashboard
              </h2>
            </div>

            {/* Search bar */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search companies or roles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Kanban Board */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {columns.map((column) => (
              <div
                key={column.id}
                className={`bg-gray-100 rounded-lg p-4 min-h-96 ${
                  dragOverColumn === column.id
                    ? "bg-gray-200 ring-2 ring-blue-400"
                    : ""
                }`}
                onDragOver={handleDragOver}
                onDragEnter={(e) => handleDragEnter(e, column.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, column.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${column.color} mr-2`}
                    ></div>
                    <h3 className="font-medium text-gray-900">
                      {column.title}
                    </h3>
                  </div>
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                    {column.count}
                  </span>
                </div>

                <div className="space-y-3">
                  {getJobsByStatus(column.id).map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      handleDragStart={handleDragStart}
                      handleDragEnd={handleDragEnd}
                    />
                  ))}

                  {getJobsByStatus(column.id).length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p className="text-sm">No applications</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTrackerDashboard;
