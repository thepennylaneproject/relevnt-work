// Supabase-backed CRUD adapter.
// Your pages can keep calling: entities.Job.list/create/update/remove

import { supabase } from "@/lib/supabase";

type Id = string;
type Query = Record<string, string | number | boolean | undefined>;
type Row = Record<string, any> & { id?: string; created_at?: string; updated_at?: string };

const TABLES = {
  Job: "jobs",
  Application: "applications",
  Contact: "contacts",
  Preferences: "preferences",
  Profile: "profiles",
  Resume: "resumes",
  BulletPoint: "bullet_bank",
  Skill: "skills_library",
  CoverLetter: "cover_letters",
  InterviewPrep: "interview_prep",
  ApplicationEvent: "application_events",
  AIInteraction: "ai_interactions",
} as const;

type EntityName = keyof typeof TABLES;

function toDbPatch(patch: Record<string, any>) {
  // pass through; add updated_at automatically on update
  return patch;
}

function assertOk<T>(res: { data: T; error: any }) {
  if (res.error) throw new Error(res.error.message || String(res.error));
  return res.data;
}

function camelToSnake(s: string) {
  return s.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`);
}

const KEY_ALIASES: Record<string, string> = {
  userId: "user_id",
  createdAt: "created_at",
  updatedAt: "updated_at",
};

function applyMatch(builder: any, q?: Record<string, any>) {
  if (!q) return builder;

  let b = builder;
  for (const [rawKey, v] of Object.entries(q)) {
    if (v === undefined) continue;
    const key = KEY_ALIASES[rawKey] ?? camelToSnake(rawKey);
    b = b.eq(key, v as any);
  }
  return b;
}

function entityClient<T = any>(entity: EntityName) {
  const table = TABLES[entity];

  return {
    async list(q?: Query): Promise<T[]> {
      let b = supabase.from(table).select("*");
      b = applyMatch(b, q);
      const data = assertOk(await b.order("created_at", { ascending: false }));
      return data as T[];
    },

    async get(id: Id): Promise<T | null> {
      const data = assertOk(await supabase.from(table).select("*").eq("id", id).maybeSingle());
      return (data as T) ?? null;
    },

    async create(data: T): Promise<T> {
      const payload: Row = { ...(data as any) };
      const res = await supabase.from(table).insert(payload).select().single();
      return assertOk(res) as T;
    },

    async update(id: Id, patch: Partial<T>): Promise<T> {
      const payload: Row = { ...toDbPatch(patch as any), updated_at: new Date().toISOString() };
      const res = await supabase.from(table).update(payload).eq("id", id).select().single();
      return assertOk(res) as T;
    },

    async remove(id: Id): Promise<{ id: Id }> {
      const res = await supabase.from(table).delete().eq("id", id).select().single();
      assertOk(res);
      return { id };
    },
  };
}

export const entities = {
  Job: entityClient("Job"),
  Application: entityClient("Application"),
  Contact: entityClient("Contact"),
  Preferences: entityClient("Preferences"),
  Profile: entityClient("Profile"),
  Resume: entityClient("Resume"),
  BulletPoint: entityClient("BulletPoint"),
  Skill: entityClient("Skill"),
  CoverLetter: entityClient("CoverLetter"),
  InterviewPrep: entityClient("InterviewPrep"),
  ApplicationEvent: entityClient("ApplicationEvent"),
  AIInteraction: entityClient("AIInteraction"),
};

// place-holders so imports don't break if referenced
export const functions = {};
export const integrations = {
}