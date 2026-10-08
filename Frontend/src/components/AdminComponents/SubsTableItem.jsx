import React from "react";

const SubsTableItem = ({ email, date, mongoId, deleteEmail, showBorder }) => {
  const emailDate = new Date(date);

  return (
    <tr className={`bg-white ${showBorder ? "border-b" : ""}`}>
      <td className="px-6 py-3">{email ? email : "No Email"}</td>

      <td className="hidden sm:table-cell px-6 py-3">
        {emailDate.toDateString()}
      </td>

      <td
        className="px-6 py-3 cursor-pointer"
        onClick={() => deleteEmail(mongoId)}
      >
        X
      </td>
    </tr>
  );
};

export default SubsTableItem;
