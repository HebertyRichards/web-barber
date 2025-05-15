import { useEffect } from "react";

export function useBronzeTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
