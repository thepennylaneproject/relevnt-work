import { useEffect, useState } from "react";
import { entities } from "@/api/base44Adapter";
import { useAuth } from "@/context/AuthContext";

// Tiny helper that does NOT call hooks, just fetches with given userId
async function getStats(userId?: string) {
  const jobs = await entities.Job.list(userId ? { userId } : {});
  // You can expand this later with Applications, Contacts, etc.
  return { jobCount: jobs.length };
}

// Simple Jobs panel you can see update live
function JobsPanel() {
  const { user } = useAuth();
  const [rows, setRows] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  async function refresh() {
    setError("");
    try {
      const list = await entities.Job.list(user ? { userId: user.id } : {});
      setRows(list);
    } catch (e: any) {
      setError(e?.message || String(e));
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  async function addJob(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const payload: any = { title, company };
      if (user?.id) payload.userId = user.id; // store who owns the job if you like
      await entities.Job.create(payload);
      setTitle("");
      setCompany("");
      await refresh();
    } catch (e: any) {
      setError(e?.message || String(e));
    }
  }

  return (
    <div style={{ padding: 16, border: "1px solid #eee", borderRadius: 12, marginTop: 16 }}>
      <h3 style={{ margin: 0, marginBottom: 8 }}>Jobs</h3>
      <form onSubmit={addJob} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1 }}
        />
        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ flex: 1 }}
        />
        <button type="submit">Add</button>
      </form>
      {error && <pre style={{ color: "crimson", whiteSpace: "pre-wrap" }}>{error}</pre>}
      <pre style={{ maxHeight: 260, overflow: "auto", background: "#fafafa", padding: 8 }}>
        {JSON.stringify(rows, null, 2)}
      </pre>
    </div>
  );
}

export default function Dashboard() {
  // ✅ use the hook at the top level of the component
  const { user, signOut } = useAuth();
  const [stats, setStats] = useState<{ jobCount: number } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const s = await getStats(user?.id);
        if (on) setStats(s);
      } catch (e: any) {
        if (on) setError(e?.message || String(e));
      }
    })();
    return () => {
      on = false;
    };
  }, [user?.id]);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Dashboard</h1>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div>
          <strong>User:</strong> {user ? user.email || user.id : "anonymous"}
        </div>
        {user ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <a href="/login"><button>Sign in</button></a>
        )}
      </div>

      {error && (
        <pre style={{ color: "crimson", whiteSpace: "pre-wrap", marginTop: 12 }}>{error}</pre>
      )}

      {!stats ? (
        <div style={{ marginTop: 12 }}>Loading…</div>
      ) : (
        <div style={{ marginTop: 12 }}>
          <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 12 }}>
            <strong>Total Jobs:</strong> {stats.jobCount}
          </div>
        </div>
      )}

      <JobsPanel />
    </div>
  );
}