import axios from "axios";
import { useEffect, useState } from "react";
import SubsTableItem from "../../components/AdminComponents/SubsTableItem";

const Subscribe = () => {
  const [data, setData] = useState([]);

  const fetchEmailData = async () => {
    const response = await axios.get("http://localhost:5000/email");
    setData(response.data.data);
    // console.log(response.data);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete(
      `http://localhost:5000/email/${mongoId}`,
    );
    console.log(response.data.data);
    fetchEmailData();
  };
  useEffect(() => {
    fetchEmailData();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pl-16 sm:pt-12">
      <h1>All Subscriptions</h1>
      <div className="relative h-[70vh] max-w-[700px] mt-4 overflow-x-auto border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500 ">
          <thead className="text-sm text-gray-500 text-left uppercase bg-gray-400 sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>

              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Date
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <SubsTableItem
                  key={item._id}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                  deleteEmail={deleteEmail}
                  showBorder={index + 1 !== data.length}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscribe;
