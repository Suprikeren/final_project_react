// import { Card } from "flowbite-react";
import Badge from "../ui/badge/Badge";
import type { Jobs as JobsType } from "../../types/JobType";
import React, { useState } from "react";
import { Link } from "react-router-dom";


type Props = {
  data: JobsType[];
  setFetchStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

function formatToRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function Card({ data, setFetchStatus }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:max-w-6xl w-auto mx-auto xl:py-5 md:py-16 py-10 xl:px-0 px-10">
        {data.map((job, index) => (
          <div
            key={job.id ?? index}
            className="flex flex-col justify-between h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex items-start mb-4">
              <img
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mr-4"
                // Add your SVG icon path here
                src={job.company_image_url}
                alt="icon"
              />
              <div>
                <p className="font-semibold tracking-tight text-gray-900 dark:text-white">
                  {job.title}
                </p>
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  {job.company_name}
                </p>
              </div>
            </div>

            {/* Bagian bawah: grid dua kolom */}
            <div className="grid grid-cols-2 items-center ">
              {/* Kiri: info grid tiga kolom */}
              <div className="flex flex-col gap-y-1 text-gray-500 dark:text-gray-400">
                <p>{job.company_city}</p>
                <div className="flex">
                  <p>{formatToRupiah(job.salary_min)}</p>-
                  <p>{formatToRupiah(job.salary_max)}</p>
                </div>

                <p>{job.job_type}</p>
              </div>

              {/* Kanan: tombol Detail */}
            </div>
            <div className="mt-6 flex justify-end">
              <Link 
                to={`/Jobs/detail/${job._id}`}
                className="inline-flex items-center text-blue-600 hover:underline font-medium text-sm"
              >
                Detail
                <svg
                  className="w-4 h-4 ms-1 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
