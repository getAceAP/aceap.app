import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const GUEST_ITEM_LIMIT = 5;

const COUNT_KEYS = {
  quiz: "aceap-guest-quiz",
  flashcards: "aceap-guest-flashcards",
} as const;

const ID_KEYS = {
  quiz: "aceap-guest-quiz-ids",
  flashcards: "aceap-guest-flashcards-ids",
} as const;

const readCount = (kind: keyof typeof COUNT_KEYS) => {
  if (typeof window === "undefined") return 0;
  const n = Number(window.localStorage.getItem(COUNT_KEYS[kind]));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

const readIds = (kind: keyof typeof ID_KEYS) => {
  if (typeof window === "undefined") return new Set<string>();
  try {
    const parsed = JSON.parse(window.sessionStorage.getItem(ID_KEYS[kind]) || "[]");
    return new Set<string>(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set<string>();
  }
};

const writeIds = (kind: keyof typeof ID_KEYS, ids: Set<string>) => {
  window.sessionStorage.setItem(ID_KEYS[kind], JSON.stringify([...ids]));
};

/** Slice a quiz/flashcard list to the guest allowance. Logged-in users get the full list. */
export function capGuestItems<T>(items: T[], remaining: number | null): T[] {
  if (remaining == null) return items;
  return items.slice(0, Math.max(0, remaining));
}

export function useGuestLimit(kind: "quiz" | "flashcards") {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [gateOpen, setGateOpen] = useState(false);
  const [, bump] = useState(0);

  useEffect(() => {
    if (!user && readCount(kind) >= GUEST_ITEM_LIMIT) {
      setGateOpen(true);
    }
  }, [kind, user]);

  const used = user ? 0 : readCount(kind);
  const remaining: number | null = user ? null : Math.max(0, GUEST_ITEM_LIMIT - used);

  const allowItem = useCallback(
    (id: string | number) => {
      if (user) return true;
      const key = `${pathname}:${id}`;
      const ids = readIds(kind);
      if (ids.has(key)) return true;
      if (readCount(kind) >= GUEST_ITEM_LIMIT) {
        setGateOpen(true);
        return false;
      }
      ids.add(key);
      writeIds(kind, ids);
      window.localStorage.setItem(COUNT_KEYS[kind], String(readCount(kind) + 1));
      bump((n) => n + 1);
      return true;
    },
    [kind, pathname, user]
  );

  const canStartNew = useCallback(() => {
    if (user) return true;
    if (readCount(kind) >= GUEST_ITEM_LIMIT) {
      setGateOpen(true);
      return false;
    }
    return true;
  }, [kind, user]);

  return {
    gateOpen,
    setGateOpen,
    allowItem,
    canStartNew,
    remaining,
  };
}
