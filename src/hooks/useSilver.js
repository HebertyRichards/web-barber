import { useEffect } from "react";

export function useSilverTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }