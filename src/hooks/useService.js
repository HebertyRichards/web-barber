import { useEffect } from "react";

export function useServiceTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }