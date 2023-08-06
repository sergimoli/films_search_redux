import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-red-400  rounded-full animate-spin"
      />
      <p className="mt-3">Looking for fims...</p>
    </div>
  );
}

export default Loading;
