import Link from "next/link";
import { cn } from "~/lib/cn";

export interface ContactItem {
  title: string;
  href: string;
}

export interface ContactListProps {
  items: ContactItem[];
}

export function ContactList({ items }: ContactListProps) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1">
      {items.map((item) => (
        <li key={item.title}>
          <Link
            className={cn(
              "text-foreground/50 transition-colors",
              "supports-hover:hover:text-foreground",
              "focus:text-foreground outline-none"
            )}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
