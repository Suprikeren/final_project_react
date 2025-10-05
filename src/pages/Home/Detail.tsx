import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Jobs } from "../../types/JobType";
import PageMeta from "../../components/common/PageMeta";

function formatToRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function DetailJobs() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<Jobs | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch(`https://final-project-api-alpha.vercel.app/api/jobs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Data tidak ditemukan");
        return res.json();
      })
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p className="text-center mt-16 text-gray-600 text-lg">
        Loading detail pekerjaan...
      </p>
    );
  }

  if (error || !job) {
    return (
      <p className="text-center mt-16 text-red-500 text-lg">
        Gagal memuat data: {error}
      </p>
    );
  }

  return (
    <>
      <PageMeta title=" Detail" description="Detail" />
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-colors duration-500">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={job.company_image_url}
            alt={job.company_name}
            className="w-20 h-20 object-contain rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          />
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {job.title}
            </h1>
            <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
              {job.company_name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {job.company_city}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-gray-700 dark:text-gray-300">
          <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-4 shadow-sm">
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">
              Tipe Pekerjaan:
            </span>{" "}
            {job.job_type}
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-4 shadow-sm">
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">
              Status:
            </span>{" "}
            <span
              className={job.job_status ? "text-green-600" : "text-red-600"}
            >
              {job.job_status ? "Dibuka" : "Ditutup"}
            </span>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-4 shadow-sm">
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">
              Tenure:
            </span>{" "}
            {job.job_tenure}
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-4 shadow-sm">
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">
              Gaji:
            </span>{" "}
            <span className="font-mono">
              {formatToRupiah(job.salary_min)} -{" "}
              {formatToRupiah(job.salary_max)}
            </span>
          </div>
        </div>

        {/* Deskripsi */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white border-b-2 border-indigo-500 inline-block pb-1">
            Deskripsi Pekerjaan
          </h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {job.job_description}
          </p>
        </section>

        {/* Kualifikasi */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white border-b-2 border-indigo-500 inline-block pb-1">
            Kualifikasi
          </h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {job.job_qualification}
          </p>
        </section>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 shadow-md transition"
            aria-label="Kembali ke halaman sebelumnya"
          >
            Kembali
          </button>

          <button
            onClick={() => alert("Apply functionality belum diimplementasikan")}
            className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition"
            aria-label="Apply pekerjaan"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
