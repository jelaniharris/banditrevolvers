import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function LinkButton({ children, href, ...props }: Props) {
  return (
    <Link
      href={href}
      className={"bg-zinc-800 text-center font-bold md:p-4 p-4 mr-2 block lg:mt-0 hover:bg-red-500"}
      {...props}
    >
      {children}
    </Link>
  );
}
