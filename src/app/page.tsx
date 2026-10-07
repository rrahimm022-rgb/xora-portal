import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Xora Society Portal
        </h1>
        <p className="text-slate-400">
          Platform web eksklusif dengan sistem autentikasi Discord aman dan cepat.
        </p>
        <div>
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition shadow-lg shadow-indigo-600/30"
          >
            Masuk ke Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
