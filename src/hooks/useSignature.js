import { useEffect } from "react";

export function useSignatureTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }