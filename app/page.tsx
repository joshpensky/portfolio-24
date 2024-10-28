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
  {
    href: "/Josh_Pensky_Resume.pdf",
    title: "Resume",
  },
  {
    href: "https://x.com/josh_jpeg",
    title: "X",
  },
  {
    href: "https://github.com/joshpensky",
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/joshpensky",
    title: "LinkedIn",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-lg">
      <h1 className="font-medium">Josh Pensky</h1>

      <Hover>
        <section
          className={cn(
            "flex flex-col gap-2",
            "transition-colors",
            "supports-hover:has-[a:hover]:text-foreground/50",
            "has-[a:focus]:text-foreground/50",
            "supports-hover:[&:has(a:hover)_*:not(:is(a:hover))]:text-current",
            "[&:has(a:focus)_*:not(:is(a:focus))]:text-current"
          )}
        >
          <h2 className="sr-only">About</h2>

          <p>I build accessible, design-forward products.</p>

          <p>
            In 2022 I founded{" "}
            <HoverItem hoverClassName="text-foreground">
              <Link
                className="outline-none"
                href="https://marathontv.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marathon
              </Link>
            </HoverItem>
            , a social platform to explore, log, and discuss all things TV.
            Marathon has been featured in the App Store, Tom&apos;s Guide, and
            Lifehacker, and has a growing community of 20,000+ members.
          </p>

          <p>
            I also co-founded{" "}
            <HoverItem hoverClassName="text-foreground">
              <Link
                className="outline-none"
                href="https://baselayer.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baselayer
              </Link>
            </HoverItem>{" "}
            with the team at Upstatement. Baselayer is a new way to build
            internal tools without leaving your codebase. It is currently in
            pre-alpha.
          </p>
        </section>
      </Hover>

      <section className="flex flex-col mt-2">
        <h2 className="sr-only">Work</h2>

        <ul className="grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-2 max-xs:grid-cols-[auto_1fr]">
          {work.map((item) => (
            <li key={item.href} className="contents">
              <dl className="contents">
                <dt className="sr-only">Year</dt>
                <dd className="text-foreground/50">
                  {item.year}
                  {item.ongoing ? (
                    <span aria-label=" to present"> &ndash;</span>
                  ) : (
                    ""
                  )}
                </dd>

                <dt className="sr-only">Title</dt>
                <dd>
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
                </dd>

                <dt className="sr-only">Role</dt>
                <dd className="text-foreground/50 xs:text-right max-xs:col-start-2 max-xs:-mt-2 max-xs:mb-1">
                  {item.role}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex gap-x-4 mt-8">
        <h2 className="sr-only">Contact</h2>

        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {contact.map((item) => (
            <Link
              key={item.title}
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
          ))}
        </ul>
      </section>
    </main>
  );
}
