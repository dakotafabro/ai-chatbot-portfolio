"use client";
import { ThreeDots } from "react-loader-spinner";

type Props = { color?: string };

export default function LoadingDots({
  color = "var(--accent, #7aa2ff)",
}: Props) {
  return <ThreeDots height={18} width={48} color={color} ariaLabel="loading" />;
}
