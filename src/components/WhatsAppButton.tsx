"use client";

import { COMPANY_INFO } from "@/data/photographyData";

export default function WhatsAppButton() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct Chat on WhatsApp"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-5 h-5 fill-current shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.495 2 2 6.486 2 12.012c0 1.954.561 3.86 1.626 5.502L2 22l4.636-1.583A10.02 10.02 0 0 0 12.031 22C17.568 22 22 17.514 22 12.012 22 6.486 17.568 2 12.031 2Zm5.792 14.288c-.244.686-1.222 1.294-1.874 1.344-.614.047-1.408.067-4.148-1.066-3.298-1.365-5.385-4.717-5.55-4.935-.165-.218-1.332-1.77-1.332-3.376 0-1.606.84-2.395 1.139-2.72.298-.326.653-.408.871-.408.217 0 .435.002.624.011.202.01.472-.077.738.563.272.653.926 2.261 1.008 2.428.082.167.136.363.027.581-.109.218-.163.354-.326.545-.163.19-.344.426-.492.572-.163.164-.333.342-.143.669.19.327.848 1.398 1.817 2.261 1.246 1.11 2.296 1.455 2.623 1.618.327.163.517.136.708-.082.19-.218.816-.953 1.034-1.28.217-.326.435-.272.734-.163.299.109 1.897.896 2.223 1.06.326.163.544.245.626.381.082.136.082.789-.163 1.475Z" />
        </svg>

        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
