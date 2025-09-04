"use client";
import { ThreeDots } from "react-loader-spinner";

export default function LoadingDots({ color }) {
  return <ThreeDots height="18" width="48" color={color} ariaLabel="loading" />;
}
