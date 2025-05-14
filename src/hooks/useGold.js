import { useEffect } from "react";

export function useGoldTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }