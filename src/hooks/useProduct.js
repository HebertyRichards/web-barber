import { useEffect } from "react";

export function useProductTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }