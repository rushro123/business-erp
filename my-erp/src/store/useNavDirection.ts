import { create } from "zustand"

interface NavState {
  currentIndex: number
  direction: "up" | "down"
  setIndex: (index: number) => void
}

export const useNavDirection = create<NavState>((set, get) => ({
  currentIndex: 0,
  direction: "down",

  setIndex: (index) => {
    const { currentIndex } = get()

    set({
      direction: index > currentIndex ? "down" : "up",
      currentIndex: index
    })
  }
}))