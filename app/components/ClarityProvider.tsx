"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (!projectId) {
      return;
    }

    clarity.init(projectId);
  }, []);

  return null;
}
