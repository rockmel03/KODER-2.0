const StatusBadge = ({ status }) => {
  const statusConfig = {
    applied: { bg: "bg-blue-100", text: "text-blue-800", label: "Applied" },
    interviewing: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      label: "Interviewing",
    },
    offer: { bg: "bg-green-100", text: "text-green-800", label: "Offer" },
    rejected: { bg: "bg-red-100", text: "text-red-800", label: "Rejected" },
  };

  const config = statusConfig[status];
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
