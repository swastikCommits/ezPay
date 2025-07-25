import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="border p-6 bg-white rounded-xl"
    >
      <h1 className="text-xl border-b pb-2">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}