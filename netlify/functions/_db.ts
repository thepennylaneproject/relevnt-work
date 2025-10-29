// netlify/functions/_db.ts
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export type Row = Record<string, any> & { id: string; createdAt?: string; updatedAt?: string };

// A small file-backed store for local dev. Writes to .data/<table>.json
const DATA_DIR = join(process.cwd(), ".data");
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

function fileFor(table: string) {
  return join(DATA_DIR, `${table}.json`);
}

function load(table: string): Record<string, Row> {
  const fp = fileFor(table);
  if (!existsSync(fp)) return {};
  try {
    const txt = readFileSync(fp, "utf8");
    return JSON.parse(txt) as Record<string, Row>;
  } catch {
    return {};
  }
}

function save(table: string, map: Record<string, Row>) {
  const fp = fileFor(table);
  writeFileSync(fp, JSON.stringify(map, null, 2), "utf8");
}

export function table(name: string) {
  return {
    list(query: Record<string, any> = {}) {
      const map = load(name);
      const rows = Object.values(map);
      return rows.filter(r =>
        Object.entries(query).every(([k, v]) => v === undefined || String((r as any)[k]) === String(v))
      );
    },
    get(id: string) {
      const map = load(name);
      return map[id] || null;
    },
    insert(row: Row) {
      const map = load(name);
      map[row.id] = row;
      save(name, map);
      return row;
    },
    update(id: string, patch: Partial<Row>) {
      const map = load(name);
      const prev = map[id];
      if (!prev) return null;
      const next = { ...prev, ...patch, updatedAt: new Date().toISOString() };
      map[id] = next;
      save(name, map);
      return next;
    },
    remove(id: string) {
      const map = load(name);
      const exists = !!map[id];
      if (exists) {
        delete map[id];
        save(name, map);
      }
      return exists;
    },
  };
}