import Link from "next/link";
import Image from "next/image";
import * as HoverCard from "@radix-ui/react-hover-card";

interface LinkPreviewProps {
  href: string;
  alt: string;
}

export const LinkPreview: React.FC<LinkPreviewProps> = ({
  children,
  href,
  alt,
}) => {
  const formatedUrl = href.replace(/https?:\/\//, "").replace("/", "!");

  return (
    <HoverCard.Root openDelay={0} closeDelay={300}>
      <HoverCard.Trigger className="cursor-pointer">
        <Link href={href}>
          <a target="blank">{children}</a>
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content
        side="top"
        className=" rounded-xl bg-secondary border-1 border-gray-200 overflow-hidden shadow-2xl preview-animation pointer-events-none"
        style={{ boxShadow: "0 5px 10px rgba(0,0,0,0.12)" }}
      >
        <div
          className="m-2 rounded-lg overflow-hidden border-box preview-animation"
          style={{ height: "144px", width: "224px" }}
        >
          <Image
            src={`/previews/${formatedUrl}.png`}
            layout="responsive"
            width={224}
            height={168}
            alt={alt}
            priority
          />
        </div>
        <HoverCard.Arrow height={20} fill="none" />
      </HoverCard.Content>
    </HoverCard.Root>
  );
};
