"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChildStoreType {
  name: string;
  dateOfBirth: string | null;
  topic: string;
  weeksAhead: string;
  setName: (name: string) => void;
  setDateOfBirth: (dateOfBirth: string | null) => void;
  setTopic: (topic: string) => void;
  setWeeksAhead: (weeksAhead: string) => void;
}

const useChildStore = create<ChildStoreType>()(
  persist(
    (set) => ({
      name: "",
      dateOfBirth: null,
      topic: "",
      weeksAhead: "",

      setName: (name: string) => set({ name }),
      setDateOfBirth: (dateOfBirth: string | null) => set({ dateOfBirth }),
      setTopic: (topic: string) => set({ topic }),
      setWeeksAhead: (weeksAhead: string) => set({ weeksAhead }),
    }),
    {
      name: "child-store",
    }
  )
);

export default useChildStore;
