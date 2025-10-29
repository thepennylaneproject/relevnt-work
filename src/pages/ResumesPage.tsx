// src/pages/ResumesPage.tsx
import { useEffect, useState } from "react";
import { entities } from "@/api/base44Adapter";
import { useAuth } from "@/context/AuthContext";

type ResumeRow = {
  id: string;
  user_id?: string | null;
  label: string;
  content?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};

export default function ResumesPage() {
  const { user } = useAuth();
  const [rows, setRows] = useState<ResumeRow[]>([]);
  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    setError(null);
    try {
      const list = await entities.Resume.list(
        user?.id ? ({ user_id: user.id } as any) : undefined
      );
      setRows(Array.isArray(list) ? (list as ResumeRow[]) : []);
    } catch (e: any) {
      setError(e?.message ?? String(e));
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await entities.Resume.create({
        label,
        content,
        user_id: user?.id ?? null
      } as any);
      setLabel("");
      setContent("");
      await refresh();
    } catch (e: any) {
      setError(e?.message ?? String(e));
    }
  }

  async function remove(id: string) {
    setError(null);
    try {
      await entities.Resume.remove(id);
      await refresh();
    } catch (e: any) {
      setError(e?.message ?? String(e));
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Resumes</h1>

      <form onSubmit={submit} style={{ display: "grid", gap: 8, maxWidth: 700 }}>
        <input
          placeholder="Resume label *"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          required
        />
        <textarea
          placeholder="Content (optional)"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {error && <div style={{ color: "crimson" }}>{error}</div>}
        <button type="submit">Add Resume</button>
      </form>

      <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
        {rows.map((r) => (
          <div key={r.id} style={{ border: "1px solid #eee", borderRadius: 10, padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{r.label}</div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>
              {r.created_at || r.updated_at || ""}
            </div>
            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <button type="button" onClick={() => remove(r.id)}>Delete</button>
            </div>
            {r.content && (
              <pre style={{ whiteSpace: "pre-wrap", background: "#fafafa", padding: 8, marginTop: 8 }}>
                {r.content}
              </pre>
            )}
          </div>
        ))}
        {!rows.length && <div style={{ opacity: 0.7 }}>No resumes yet.</div>}
      </div>
    </div>
  );
}