import { Button } from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const EditIssueButton = ({ issueid }: { issueid: number }) => {
  return (
    <Button>
      <Pencil2Icon /> <Link href={`/issues/${issueid}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
