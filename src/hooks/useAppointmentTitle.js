import { useEffect } from "react";

export function useAppointmenTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }