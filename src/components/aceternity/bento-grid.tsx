import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 sm:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  WrapperImage,
  InnerContent
}: {
  className?: string;
  WrapperImage?: StaticImageData
  InnerContent?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-sm group/bento transition duration-200 dark:bg-black dark:border-white/[0.2] bg-white border border-neutral-400 justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      {WrapperImage && <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src={WrapperImage}
          alt="Vihanga Silva - Portfolio Skills"
          width={500}
          height={400}
          className="w-full h-full object-cover grayscale group-hover/bento:grayscale-0 opacity-10 duration-150"
        />
      </div>}

      <div className="group-hover/bento:translate-x-2 transition duration-200 p-4">
        {InnerContent}
      </div>
    </div>
  );
};
