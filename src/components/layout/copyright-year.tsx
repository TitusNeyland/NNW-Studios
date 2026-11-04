"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const getYear = () => String(new Date().getFullYear());
const getServerYear = () => "2026";

export function CopyrightYear() {
  const year = useSyncExternalStore(emptySubscribe, getYear, getServerYear);
  return <>{year}</>;
}
