import Link from "next/link";
import { Preview } from "~/components/Preview";
import { cn } from "~/lib/cn";

export interface TableItem {
  year: number;
  ongoing?: true;
  title: string;
  meta: string;
  href: string | null;
  previews?: {
    mime: string;
    src: string;
    alt?: string;
    width: number;
    height: number;
  }[];
}

export interface TableProps {
  items: TableItem[];
  metaColumnLabel: string;
}

export function Table({ items, metaColumnLabel }: TableProps) {
  return (
    <div
      role="table"
      className="grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-3 max-xs:grid-cols-[auto_1fr]"
    >
      <div role="row" className="sr-only">
        <div role="columnheader">Year(s)</div>
        <div role="columnheader">Title</div>
        <div role="columnheader">{metaColumnLabel}</div>
        <div role="columnheader">Media</div>
      </div>

      {items.map((item) => (
        <div key={item.href} role="row" className="contents">
          <div className="text-foreground/50 min-w-14" role="cell">
            {item.year}
            {item.ongoing ? <span aria-label=" to present"> &ndash;</span> : ""}
          </div>

          <div role="cell">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </div>

          <div
            className="text-foreground/50 xs:text-right max-xs:col-start-2 max-xs:col-span-2 max-xs:-mt-3"
            role="cell"
          >
            {item.meta}
          </div>

          <div
            role="cell"
            className={cn(
              !item.previews?.length && "sr-only",
              "col-start-2 col-span-2 mb-1.5 -mt-1 flex flex-wrap gap-2"
            )}
          >
            {item.previews?.map((preview) => (
              <Preview key={preview.src} {...preview} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
