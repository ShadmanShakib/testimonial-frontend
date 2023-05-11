import React from "react";
import { DashHeader } from "@/features/dashboard/components";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div>
      <DashHeader
        title="Your forms"
        description="Use forms to collect your testimonial form users"
      />
    </div>
  );
}
