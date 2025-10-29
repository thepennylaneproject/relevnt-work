import { useEffect, useState } from "react";
import { entities } from "@/api/base44Adapter";
import { useAuth } from "@/context/AuthContext";

type ApplicationRow = {
  id: string;
  jobId: string;
  status: string;
  notes?: string;
  createdAt?: string;
  userId?: string;
};

export default function ApplicationsPage() {
  const { user } = useAuth();
  const [rows, setRows] = useState<ApplicationRow[]>([]);
  const [error, setError] = useState("");

  async function refresh() {
    setError("");
    try {
      const list = await entities.Application.list(user?.id ? { userId: user.id } as any : undefined);
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

  async function updateStatus(id: string, newStatus: string) {
    setError("");
    try {
      await entities.Application.update(id, { status: newStatus } as any);
      await refresh();
    } catch (e: any) {
      setError(e?.message || String(e));
    }
  }

  async function remove(id: string) {
    setError("");
    try {
      await entities.Application.remove(id);
      await refresh();
    } catch (e: any) {
      setError(e?.message || String(e));
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Applications</h1>
      {error && <pre style={{ color: "crimson" }}>{error}</pre>}

      <div style={{ display: "grid", gap: 8 }}>
        {rows.map((r) => (
          <div key={r.id} style={{ border: "1px solid #eee", borderRadius: 10, padding: 12 }}>
            <div><strong>Status:</strong> {r.status}</div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>{r.createdAt || "—"}</div>
            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <button onClick={() => updateStatus(r.id, "applied")}>Mark Applied</button>
              <button onClick={() => updateStatus(r.id, "interview")}>Mark Interview</button>
              <button onClick={() => updateStatus(r.id, "offer")}>Mark Offer</button>
              <button onClick={() => remove(r.id)}>Delete</button>
            </div>
          </div>
        ))}
        {!rows.length && <div style={{ opacity: 0.7 }}>No applications yet.</div>}
      </div>
    </div>
  );
}

export { ApplicationsPage };