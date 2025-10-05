import Nav from "../../components/home/Nav";
import Footer from "../../components/home/Footer";
import Card from "../../components/home/Card";

import type { Jobs as JobsType } from "../../types/JobType";
import Search from "../../components/filter/Search";
import axios from "axios";
import  { useState, useEffect } from "react";
import { filterJobsByQuery } from "../../utils/FilterJobs";

import Pagination from "../../components/common/pagination";

import PageMeta from "../../components/common/PageMeta";

export default function Jobs() {


//   pagination

  const [data, setData] = useState<JobsType[]>([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // ⬇️ ini harus dideklarasikan dulu sebelum digunakan
  const filteredData = filterJobsByQuery(data, searchQuery);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const sortedData = [...filteredData].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);


// pagination end
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
     <PageMeta
            title="Jobs"
            description="Jobs"/>
      <Nav />
      <section className="">
        <div className="w-full">
          {/* content */}
          <div className="xl:py-28 md:py-20 py-10 xl:px-0 px-10">
            <div className="w-full mx-auto flex items-center justify-center bg-emerald-50 rounded-full text-emerald-600 text-center text-sm font-medium leading-5 px-3 py-1 mb-5">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-3/4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0 0a7 7 0 1 0-9.9 0 7 7 0 0 0 9.9 0Z"
                    />
                  </svg>
                </div>
                <Search
                  value={searchQuery}
                  onChange={(val) => setSearchQuery(val)}
                  placeholder="Cari pekerjaan, perusahaan, kota..."
                />
              </div>
            </div>
          
          </div>
          {/* card */}
          {/* <Card/> */}
          <Card data={currentJobs} setFetchStatus={setFetchStatus} />
             <div className="flex justify-end mt-4 pr-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
          {/* card */}
          <Footer />
        </div>
      </section>
    </>
  );
}
