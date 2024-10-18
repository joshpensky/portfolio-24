import Link from "next/link";
import { Hover, HoverItem } from "~/components/hover";
import { cn } from "~/lib/cn";

interface WorkItem {
  year: number;
  ongoing?: true;
  title: string;
  role: string;
  href: string | null;
}

const work: WorkItem[] = [
  {
    year: 2022,
    ongoing: true,
    title: "Marathon",
    role: "Founder",
    href: "https://marathontv.app",
  },
  {
    year: 2024,
    title: "Baselayer",
    role: "Co-founder",
    href: "https://baselayer.app",
  },
  {
    year: 2024,
    title: "Condé Nast",
    role: "Lead Engineer",
    href: null,
  },
  {
    year: 2023,
    title: "Campsite",
    role: "Product Engineer",
    href: "https://campsite.com",
  },
  {
    year: 2022,
    title: "GoNoodle",
    role: "Lead Engineer",
    href: "https://gonoodle.com",
  },
  {
    year: 2021,
    title: "Koala Health",
    role: "Senior Engineer",
    href: "https://koala.health",
  },
];

interface ContactItem {
  href: string;
  title: string;
}

const contact: ContactItem[] = [
  // {
  //   href: "/resume.pdf",
  //   title: "Resume",
  // },
  {
    href: "https://x.com/josh_jpeg",
    title: "X",
  },
  {
    href: "https://github.com/joshpensky",
    title: "GitHub",
  },
];

export default function Home() {
  return (
    <main className={cn("p-5 xs:p-7 sm:p-14 flex flex-col gap-4 max-w-xl")}>
      <h1 className="font-medium">Josh Pensky</h1>

      <Hover>
        <section
          aria-label="About"
          className={cn(
            "flex flex-col gap-2",
            "transition-colors",
            "supports-hover:has-[a:hover]:text-foreground/40",
            "has-[a:focus]:text-foreground/40",
            "supports-hover:[&:has(a:hover)_*:not(:is(a:hover))]:text-current",
            "[&:has(a:focus)_*:not(:is(a:focus))]:text-current"
          )}
        >
          <p>I build accessible, design-forward products.</p>

          <p>
            In 2022 I founded{" "}
            <HoverItem hoverClassName="text-foreground">
              <Link className="outline-none" href="https://marathontv.app">
                Marathon
              </Link>
            </HoverItem>
            , a social platform to explore, log, and discuss all things TV.
            Marathon has been featured in the App Store and Tom&apos;s Guide,
            and has a growing community of 20,000+ members.
          </p>

          <p>
            I also co-founded{" "}
            <HoverItem hoverClassName="text-foreground">
              <Link className="outline-none" href="https://baselayer.app">
                Baselayer
              </Link>
            </HoverItem>{" "}
            with the team at Upstatement. Baselayer is a new way to build
            internal tools in your existing codebase. We&apos;re currently in
            pre-alpha.
          </p>
        </section>
      </Hover>

      <section aria-label="Work" className="flex flex-col mt-2">
        <ul className="grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-2 max-xs:flex max-xs:flex-col max-xs:gap-y-3">
          {work.map((item) => (
            <li
              key={item.href}
              className="contents max-xs:flex max-xs:flex-col"
            >
              <dl className="contents">
                <dt className="sr-only">Year</dt>
                <dd className="text-foreground/40">
                  {item.year}
                  {item.ongoing ? <> &ndash;</> : ""}
                </dd>

                <dt className="sr-only">Title</dt>
                <dd>
                  {item.href ? (
                    <Link href={item.href} className="hover:text-black">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </dd>

                <dt className="sr-only">Role</dt>
                <dd className="text-foreground/40 xs:text-right">
                  {item.role}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Contact" className="flex gap-x-4 mt-8 mb-4">
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {contact.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "text-foreground/40 transition-colors",
                "supports-hover:hover:text-foreground",
                "focus:text-foreground outline-none"
              )}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}
