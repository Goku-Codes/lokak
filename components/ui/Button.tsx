import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "filled" | "outline";

type ButtonLinkProps = {
  as?: "a";
  href: string;
  /** Preferred prop */
  variant?: Variant;
  /** Back-compat with earlier usage */
  ["data-variant"]?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonButtonProps = {
  as: "button";
  /** Preferred prop */
  variant?: Variant;
  /** Back-compat with earlier usage */
  ["data-variant"]?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = ButtonLinkProps | ButtonButtonProps;

export default function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition";
  const filled = "bg-white text-black hover:bg-neutral-200";
  const outline = "border border-white/30 hover:bg-white hover:text-black";

  const chosenVariant: Variant =
    (("variant" in props && props.variant) ||
      (props as any)["data-variant"] ||
      "filled") as Variant;

  const className =
    (("className" in props && props.className) ? props.className + " " : "") +
    base +
    " " +
    (chosenVariant === "outline" ? outline : filled);

  if ("as" in props && props.as === "button") {
    // strip our custom props before spreading
    const { as, variant, ["data-variant"]: _dv, className: _c, ...rest } =
      props as ButtonButtonProps & Record<string, unknown>;
    return <button {...rest} className={className} />;
  }

  const { href, variant, ["data-variant"]: _dv2, className: _c2, ...rest } =
    props as ButtonLinkProps & Record<string, unknown>;
  return (
    <Link href={href} {...(rest as any)} className={className} />
  );
}
