"use client";
import { useBalance } from "@repo/store/useBalance";

export default function Home() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}