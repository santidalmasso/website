import cn from "classnames";

export function Divider({ className = "" }) {
  return <hr className={cn("w-16 h-px my-0 mx-auto border-none bg-gray-200", className)} />;
}
