// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
// import PageMeta from "../../components/common/PageMeta";
// import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";
import Jobs from "../../components/jobs/index";
// import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Link } from "react-router";
import  { useState, useEffect } from "react";
import axios from "axios";
import  type{Jobs as JobsType}  from "../../types/JobType";
import Search from "../../components/filter/Search";
import { filterJobsByQuery } from "../../utils/FilterJobs";



export default function JobList() {
  const [data, setData] = useState<JobsType[]>([]);
  const [fetchStatus, setFetchStatus] = useState(true);
   const [searchQuery, setSearchQuery] = useState("");
   const filteredData = filterJobsByQuery(data, searchQuery);

  useEffect(() => {
    if (fetchStatus) {
      axios
        .get("https://final-project-api-alpha.vercel.app/api/jobs")
        
        .then((res) => {
          setData(res.data);
          setFetchStatus(false);
        })
        .catch((err) => console.error(err));
    }
  }, [fetchStatus]);

  return (
    <>
      {/* <PageBreadcrumb pageTitle="Jobs List" /> */}
      <div className="space-y-6">
        <ComponentCard
          title="Jobs List"
          headerContent={
            <div className="flex items-center gap-4">
              {/* ini inputnya cuman mau dinamis karena mau ku pakai di halaman lain juga selain halaman ini */}
               <Search
            value={searchQuery}
            onChange={(val) => setSearchQuery(val)}
            placeholder="Cari pekerjaan, perusahaan, kota..."
          />
              {/* seacrh selesai */}
              <Link
                to="/dashboard/create/jobs"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                + Add Job
              </Link>
            </div>
          }
        >
           <Jobs data={filteredData} setFetchStatus={setFetchStatus} />
        </ComponentCard >
      </div>
    </>
  );
}
