import { Calendar, Building } from "lucide-react";
import StatusBadge from "./StatusBadge";

const JobCard = ({ job, handleDragStart, handleDragEnd }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, job)}
      onDragEnd={handleDragEnd}
      className="bg-white rounded-lg shadow-md p-4 mb-3 border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-move hover:border-gray-300"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900 text-sm">{job.company}</h3>
        <StatusBadge status={job.status} />
      </div>
      <p className="text-gray-700 text-sm mb-2">{job.role}</p>
      <div className="flex items-center text-xs text-gray-500 mb-1">
        <Calendar className="w-3 h-3 mr-1" />
        {formatDate(job.dateApplied)}
      </div>
      <div className="flex items-center text-xs text-gray-500 mb-1">
        <Building className="w-3 h-3 mr-1" />
        {job.location}
      </div>
      <div className="text-xs font-medium text-green-600">{job.salary}</div>
    </div>
  );
};

export default JobCard;
