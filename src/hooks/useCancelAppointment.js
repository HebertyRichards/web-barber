import { useEffect } from "react";

export function useAppointmentCancelTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }