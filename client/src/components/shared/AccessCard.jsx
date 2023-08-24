import React from "react";

function AccessCard() {
  return (
    <div className="flex gap-2">
      <div className="h-[40px] w-[40px] rounded-full overflow-hidden border-[1px]">
        <img src="https://lh3.googleusercontent.com/a/AAcHTtfE3tLTOxUuG5kpPWpz5YZRdbKitq1qXswUhgfkqBmPhGM=s64-c"></img>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px]">Pritam Sharma(you)</span>
        <span className="text-[12px]">techupdate9931@gmail.com</span>
      </div>
    </div>
  );
}

export default AccessCard;
