import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "../../ValidationSchemas";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/AuthOptions";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      {
        error: "You must be signed in to create an issue.",
      },
      { status: 401 }
    );

  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  //   Validation failed
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
