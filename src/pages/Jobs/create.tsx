import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import type { Jobs as JobsType } from "../../types/JobType";
import Cookies from "js-cookie";

type CreateJobsProps = {
  setFetchStatus: React.Dispatch<React.SetStateAction<boolean>>;
  initialData?: JobsType;
};

export default function CreateJobs({
  setFetchStatus,
  initialData,
}: CreateJobsProps) {
      const {id} = useParams();
const navigate = useNavigate();
  const [create, setCreate] = useState<JobsType>(
    initialData || {
      _id: "",
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: false,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_max: 0,
      salary_min: 0,
    }
  );

  useEffect(() => {
    if (initialData) {
      setCreate(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    // Jika ada id di params, fetch data job
    if (id) {
      axios
        .get(`https://final-project-api-alpha.vercel.app/api/jobs/${id}`)
        .then((res) => {
          setCreate(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch job data:", err);
          alert("Gagal mengambil data job untuk diedit.");
        });
    }
  }, [id]);

  const handleCreate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    let value: any = e.target.value;

    // Konversi nilai khusus
    if (name === "job_status") {
      value = value === "1" ? true : false;
    } else if (name === "salary_min" || name === "salary_max") {
      value = Number(value);
    }

    // Update state
    setCreate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = Cookies.get("token");

    if (!token) {
      alert("Anda belum login atau token tidak ditemukan.");
      return;
    }

    try {
      if (create._id) {
        // Update data (PUT)
        await axios.put(
          `https://final-project-api-alpha.vercel.app/api/jobs/${create._id}`,
          create,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Jobs berhasil diupdate!");
         setFetchStatus(true);
    navigate("/dashboard/jobs");
      } else {
        // Create data (POST)
        const { _id, ...payload } = create;
        console.log("Payload yang dikirim:", payload);

        await axios.post(
          "https://final-project-api-alpha.vercel.app/api/jobs",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Jobs berhasil ditambahkan!");
      }

      setFetchStatus(true);
    navigate("/dashboard/jobs");

    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-xl shadow-lg border border-gray-200 dark:border-white/10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">
        Create New Job
      </h2>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Company Name */}
          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              value={create.company_name}
                    onChange={handleCreate}
              placeholder="PT. Teknologi Nusantara"
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-300 
              placeholder-gray-400 dark:placeholder-gray-500 
              px-4 py-3 text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out"
            />
          </div>

          {/* Job Title */}
          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={create.title}
              onChange={handleCreate}
              placeholder="Frontend Developer"
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-300 
              placeholder-gray-400 dark:placeholder-gray-500 
              px-4 py-3 text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out"
            />
          </div>

          {/* Company Logo URL */}
          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Company Logo URL
            </label>
            <input
              type="url"
              onChange={handleCreate}
              placeholder="https://image-url.com/logo.png"
              name="company_image_url"
              value={create.company_image_url}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-300 
              placeholder-gray-400 dark:placeholder-gray-500 
              px-4 py-3 text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="Jakarta, Indonesia"
              name="company_city"
              value={create.company_city}
              onChange={handleCreate}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-300 
              placeholder-gray-400 dark:placeholder-gray-500 
              px-4 py-3 text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out"
            />
          </div>

          {/* Job Type */}
          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Job Type
            </label>
            <input
              type="text"
              name="job_type"
              value={create.job_type}
              onChange={handleCreate}
              placeholder="Full-time, Part-time, Remote, Contract"
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-300 
              placeholder-gray-400 dark:placeholder-gray-500 
              px-4 py-3 text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out"
            />
          </div>

          {/* Job Status */}
          <div className="flex flex-col col-span-1">
            <label
              htmlFor="job_status"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Job Status
            </label>
            <select
              id="job_status"
              name="job_status"
              value={create.job_status ? "1" : "0"}
              onChange={(e) =>
                setCreate({
                  ...create,
                  job_status: e.target.value === "1",
                })
              }
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-800 
  text-gray-900 dark:text-gray-300 
  px-4 py-3 text-base 
  focus:outline-none focus:ring-2 focus:ring-blue-500 
  transition duration-150 ease-in-out"
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          {/*  */}
          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Job Tenure
            </label>
            <input
              type="text"
              name="job_tenure"
              value={create.job_tenure}
              onChange={handleCreate}
              placeholder="Contract,"
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-300 
              placeholder-gray-400 dark:placeholder-gray-500 
              px-4 py-3 text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out"
            />
          </div>
          {/* Min Salary */}

          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Minimum Salary (Rp)
            </label>
            <input
              type="number"
              placeholder="5000000"
              name="salary_min"
              value={create.salary_min}
              onChange={handleCreate}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-300 
              placeholder-gray-400 dark:placeholder-gray-500 
              px-4 py-3 text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out"
            />
          </div>

          {/* Max Salary */}
          <div className="flex flex-col col-span-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Maximum Salary (Rp)
            </label>
            <input
              type="number"
              placeholder="10000000"
              name="salary_max"
              value={create.salary_max}
              onChange={handleCreate}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-300 
              placeholder-gray-400 dark:placeholder-gray-500 
              px-4 py-3 text-base 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out"
            />
          </div>
        </div>

        {/* Job Description */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Job Description
          </label>
          <textarea
            rows={4}
            name="job_description"
            value={create.job_description}
            onChange={handleCreate}
            placeholder="Describe the responsibilities, tools, and expectations..."
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-300 
            placeholder-gray-400 dark:placeholder-gray-500 
            px-4 py-3 text-base 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition duration-150 ease-in-out resize-y"
          />
        </div>

        {/* Qualification */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Qualification
          </label>
          <textarea
            name="job_qualification"
            value={create.job_qualification}
            onChange={handleCreate}
            rows={4}
            placeholder="List of qualifications or requirements"
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-300 
            placeholder-gray-400 dark:placeholder-gray-500 
            px-4 py-3 text-base 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition duration-150 ease-in-out resize-y"
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-md 
                     hover:bg-blue-700 transition-all font-medium shadow-sm"
          >
            {create._id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
