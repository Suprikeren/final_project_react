import { ArrowDownIcon, ArrowUpIcon } from "../../icons";
import Badge from "../ui/badge/Badge";
import { useEffect, useState } from "react";
import {
  UserGroupIcon,
  CheckCircleIcon,
  XCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

type JobType = {
  _id: string;
  title: string;
  job_status: number; // 1 = active, 0 = inactive
};

export default function EcommerceMetrics() {
  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "https://final-project-api-alpha.vercel.app/api/jobs"
        );
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const totalJobs = jobs.length;
  const totalActive = jobs.filter((job) => job.job_status === 1).length;
  const totalInactive = jobs.filter((job) => job.job_status === 0).length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
      {/* Total Jobs */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12  rounded-xl dark:bg-gray-800">
          <BriefcaseIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Jobs
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {totalJobs}
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            {totalJobs > 0 ? "+100%" : "0%"}
          </Badge>
        </div>
      </div>

      {/* Active Jobs */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl dark:bg-gray-800">
          <CheckCircleIcon className="text-green-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Active Jobs
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {totalActive}
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            {((totalActive / (totalJobs || 1)) * 100).toFixed(2)}%
          </Badge>
        </div>
      </div>

      {/* Inactive Jobs */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12  rounded-xl dark:bg-gray-800">
          <XCircleIcon className="text-red-500 w-6 h-6" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Inactive Jobs
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {totalInactive}
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon />
            {((totalInactive / (totalJobs || 1)) * 100).toFixed(2)}%
          </Badge>
        </div>
      </div>
    </div>
  );
}
