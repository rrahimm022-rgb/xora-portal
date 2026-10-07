"use client";

import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";

function DashboardContent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400 animate-pulse">Memuat sesi pengguna...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Xora Member Panel</h2>
          <p className="text-xs text-slate-400">Kelola akun dan otorisasi Discord Anda</p>
        </div>

        {session ? (
          <div className="space-y-5">
            <div className="flex items-center space-x-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="Avatar"
                  className="w-14 h-14 rounded-full border-2 border-indigo-500/50 object-cover"
                />
              )}
              <div className="overflow-hidden">
                <h3 className="font-semibold text-base truncate">{session.user?.name}</h3>
                <p className="text-xs text-slate-400 truncate">{session.user?.email}</p>
              </div>
            </div>

            <div className="p-4 bg-slate-800/20 rounded-xl border border-slate-800 space-y-1 text-xs font-mono">
              <p className="text-slate-400">Discord ID:</p>
              <p className="text-indigo-300">{(session.user as any)?.discordId || "Tidak tersedia"}</p>
            </div>

            <button
              onClick={() => signOut()}
              className="w-full py-3 px-4 bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-600/30 rounded-xl font-medium transition text-sm"
            >
              Keluar (Logout)
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => signIn("discord")}
              className="w-full py-3.5 px-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-semibold transition flex items-center justify-center space-x-2 shadow-lg shadow-[#5865F2]/25 text-sm"
            >
              <span>Login dengan Discord</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default function Dashboard() {
  return (
    <SessionProvider>
      <DashboardContent />
    </SessionProvider>
  );
}
