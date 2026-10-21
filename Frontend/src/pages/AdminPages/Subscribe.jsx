import axios from "axios";
import { useEffect, useState } from "react";
import SubsTableItem from "../../components/AdminComponents/SubsTableItem";

const Subscribe = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEmailData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("http://localhost:5000/email");
      setData(response.data.data);
    } catch (err) {
      setError("Failed to fetch subscriptions. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteEmail = async (mongoId) => {
    try {
      setError("");

      await axios.delete(`http://localhost:5000/email/${mongoId}`);
      await fetchEmailData();
    } catch (err) {
      setError("Failed to delete subscription. Please try again.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmailData();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pl-16 sm:pt-12">
      <h1 className="text-xl font-semibold">All Subscriptions</h1>

      {error && (
        <div className="mt-4 rounded bg-red-100 p-3 text-red-600">
          {error}
          <button
            onClick={fetchEmailData}
            className="ml-3 font-semibold underline"
          >
            Retry
          </button>
        </div>
      )}

      <div className="relative mt-4 h-[70vh] max-w-[700px] overflow-x-auto border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="sticky top-0 bg-gray-400 text-left text-sm text-gray-500 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>

              <th scope="col" className="hidden px-6 py-3 sm:table-cell">
                Date
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="py-10 text-center text-gray-600">
                  Loading subscriptions...
                </td>
              </tr>
            ) : data.length === 0 && !error ? (
              <tr>
                <td colSpan="3" className="py-10 text-center text-gray-600">
                  No subscriptions found.
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <SubsTableItem
                  key={item._id}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                  deleteEmail={deleteEmail}
                  showBorder={index + 1 !== data.length}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscribe;
