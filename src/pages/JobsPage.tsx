import { useEffect, useState } from "react";
import { entities } from "@/api/base44Adapter";
import { useAuth } from "@/context/AuthContext";

type JobRow = {
  id: string;
  title: string;
  company?: string;
  location?: string;
  url?: string;
  createdAt?: string;
  userId?: string;
};

function JobForm({ onCreated }: { onCreated: () => void }) {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await entities.Job.create({
        title,
        company,
        location,
        ...(user?.id ? { userId: user.id } : {}),
      } as any);
      setTitle("");
      setCompany("");
      setLocation("");
      onCreated();
    } catch (e: any) {
      setError(e?.message || String(e));
    }
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 8, maxWidth: 600 }}>
      <input placeholder="Title *" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
      <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      {error && <div style={{ color: "crimson" }}>{error}</div>}
      <button type="submit">Add Job</button>
    </form>
  );
}

export default function JobsPage() {
  const { user } = useAuth();
  const [rows, setRows] = useState<JobRow[]>([]);
  const [error, setError] = useState("");

  async function refresh() {
    setError("");
    try {
      const list = await entities.Job.list(user?.id ? { userId: user.id } as any : undefined);
      // optional: newest first
      list.sort((a: any, b: any) => (a.createdAt || "").localeCompare(b.createdAt || "")).reverse();
      setRows(list as any);
    } catch (e: any) {
      setError(e?.message || String(e));
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  async function remove(id: string) {
    setError("");
    try {
      await entities.Job.remove(id);
      await refresh();
    } catch (e: any) {
      setError(e?.message || String(e));
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Jobs</h1>

      <JobForm onCreated={refresh} />
      {error && <pre style={{ color: "crimson" }}>{error}</pre>}

      <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
        {rows.map((r) => (
          <div key={r.id} style={{ border: "1px solid #eee", borderRadius: 10, padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{r.title}</div>
            <div style={{ opacity: 0.8 }}>{r.company || "—"} · {r.location || "—"}</div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>{r.createdAt || "—"}</div>
            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <button onClick={() => remove(r.id)}>Delete</button>
            </div>
          </div>
        ))}
        {!rows.length && <div style={{ opacity: 0.7 }}>No jobs yet.</div>}
      </div>
    </div>
  );
}

export { JobsPage }; // also export named, in case your routes import it that way