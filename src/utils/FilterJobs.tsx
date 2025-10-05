
import type { Jobs as JobsType } from "../types/JobType";

export function filterJobsByQuery(jobs: JobsType[], query: string): JobsType[] {
  if (!query) return jobs;

  const q = query.toLowerCase();

  return jobs.filter((job) =>
    job.title.toLowerCase().includes(q) ||
    job.company_name.toLowerCase().includes(q) ||
    job.company_city.toLowerCase().includes(q) ||
     job.job_type.toLowerCase().includes(q) ||
      job.job_tenure.toLowerCase().includes(q)
  );
}
