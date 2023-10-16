import React from "react";

import dynamic from "next/dynamic";
import IssueFormSkeleton from "@/app/issues/_components/issueFormSkeleton";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  loading: () => <IssueFormSkeleton />,
  ssr: false,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
