"use client";

import { calculateWeeksOld } from "@/libs/date";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChildStoreType {
  name: string;
  dateOfBirth: string | null;
  topic: string;
  weeks: number | null;
  weeksAhead: number;
  setName: (name: string) => void;
  setDateOfBirth: (dateOfBirth: string | null) => void;
  setTopic: (topic: string) => void;
  setWeeksAhead: (weeksAhead: number) => void;
}

const useChildStore = create<ChildStoreType>()(
  persist(
    (set) => ({
      name: "",
      dateOfBirth: null,
      topic: "",
      weeksAhead: 1,
      weeks: null,

      setName: (name: string) => set({ name }),
      setDateOfBirth: (dateOfBirth: string | null) =>
        set({
          dateOfBirth,
          weeks: dateOfBirth ? calculateWeeksOld(dateOfBirth) : null,
        }),
      setTopic: (topic: string) => set({ topic }),
      setWeeksAhead: (weeksAhead: number) => set({ weeksAhead }),
    }),
    {
      name: "child-store",
    }
  )
);

export default useChildStore;
