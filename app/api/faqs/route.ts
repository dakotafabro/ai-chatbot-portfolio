import { NextResponse } from "next/server";
import faqsData from "../../../data/faqs.json";

/**
 * Dakota: Keep the backend simple. In production, this would live in a DB or CMS.
 * For the course, JSON is enough and keeps the focus on the AI parts.
 */
export async function GET() {
  return NextResponse.json(faqsData);
}
