import Link from "next/link";
import { Hover, HoverItem } from "~/components/hover";
import { Preview } from "~/components/Preview";
import { cn } from "~/lib/cn";

interface WorkItem {
  year: number;
  ongoing?: true;
  title: string;
  role: string;
  href: string | null;
  previews?: {
    mime: string;
    src: string;
    alt?: string;
    width: number;
    height: number;
  }[];
}

const work: WorkItem[] = [
  {
    year: 2022,
    ongoing: true,
    title: "Marathon",
    role: "Founder",
    href: "https://marathontv.app",
    previews: [
      {
        mime: "video/mp4",
        src: "/marathon-show-page.mp4",
        width: 1,
        height: 1,
      },
      {
        mime: "image/png",
        src: "/marathon-share-review.png",
        alt: "A share image from Marathon's socials featuring the new share sheet with custom explore images.",
        width: 1200,
        height: 750,
      },
      {
        mime: "image/png",
        src: "/marathon-explore.png",
        alt: "A screenshot of Marathon's explore page, with different paths for discovering new shows.",
        width: 1200,
        height: 750,
      },
    ],
  },
  {
    year: 2024,
    title: "Condé Nast",
    role: "Lead Engineer",
    href: null,
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

const projects: WorkItem[] = [
  {
    year: 2024,
    title: "Baselayer",
    role: "Co-founder",
    href: "https://baselayer.app",
    previews: [
      {
        mime: "image/png",
        src: "/baselayer-dashboard.png",
        alt: "A screenshot of Baselayer's dashboard, focusing on the edit form for an organization.",
        width: 1300,
        height: 840,
      },
      {
        mime: "video/mp4",
        src: "/baselayer-favorites.mp4",
        width: 2880,
        height: 2160,
      },
    ],
  },
  {
    year: 2022,
    title: "Spectacles",
    role: "Creator",
    href: "https://apps.apple.com/ro/app/spectacles-cbt-partner/id6443663992",
  },
  {
    year: 2021,
    title: "Myseum",
    role: "Creator",
    href: "https://myseum.space",
  },
];

const writings: WorkItem[] = [
  {
    year: 2024,
    title: "Accelerating Time to Value",
    role: "Upstatement",
    href: "https://upstatement.com/blog/introducing-baselayer",
  },
  {
    year: 2024,
    title: "Watching TV with Marathon",
    role: "Railway",
    href: "https://blog.railway.com/p/marathon-tv-app",
  },
  {
    year: 2023,
    title: "How a Start-Up Founder Manages Its Backlog",
    role: "Upstatement",
    href: "https://upstatement.com/blog/how-a-start-up-founder-manages-its-backlog",
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
    href: "https://bsky.app/profile/joshpensky.com",
    title: "Bluesky",
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
    <div className="p-5 max-xs:my-3 xs:p-7 sm:p-14">
      <main className={cn("flex flex-col gap-4 max-w-lg")}>
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
              Lifehacker, and has a growing community of over 20,000 members.
            </p>

            <p>
              I also created{" "}
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
              with the team at Upstatement. Baselayer is an internal workspace
              built to access, share, and collaborate on product data with your
              whole team.
            </p>
          </section>
        </Hover>

        <section className="flex flex-col mt-3">
          <h2 className="font-medium mb-3">Work</h2>

          <ul className="grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-3 max-xs:grid-cols-[auto_1fr]">
            {work.map((item) => (
              <li key={item.href} className="contents">
                <dl className="contents">
                  <dt className="sr-only">Year</dt>
                  <dd className="text-foreground/50 min-w-14">
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
                  <dd className="text-foreground/50 xs:text-right max-xs:col-start-2 max-xs:col-span-2 max-xs:-mt-3">
                    {item.role}
                  </dd>
                </dl>

                {!!item.previews?.length && (
                  <div className="col-start-2 col-span-2 mb-1.5 -mt-1 flex flex-wrap gap-2">
                    {item.previews.map((preview) => (
                      <Preview key={preview.src} {...preview} />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col mt-4">
          <h2 className="font-medium mb-3">Projects</h2>

          <ul className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 max-xs:grid-cols-[auto_1fr]">
            {projects.map((item) => (
              <li key={item.href} className="contents">
                <dl className="contents">
                  <dt className="sr-only">Year</dt>
                  <dd className="text-foreground/50 min-w-14">
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
                </dl>

                {!!item.previews?.length && (
                  <div className="col-start-2 col-span-1 mb-1.5 -mt-1 flex flex-wrap gap-2">
                    {item.previews.map((preview) => (
                      <Preview key={preview.src} {...preview} />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col mt-4">
          <h2 className="font-medium mb-3">Writing</h2>

          <ul className="grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-3 max-xs:grid-cols-[auto_1fr]">
            {writings.map((item) => (
              <li key={item.href} className="contents">
                <dl className="contents">
                  <dt className="sr-only">Year</dt>
                  <dd className="text-foreground/50 min-w-14">
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

                  <dt className="sr-only">Publisher</dt>
                  <dd className="text-foreground/50 xs:text-right max-xs:col-start-2 max-xs:col-span-2 max-xs:-mt-3">
                    {item.role}
                  </dd>
                </dl>

                {!!item.previews?.length && (
                  <div className="col-start-2 col-span-2 mb-1.5 -mt-1 flex flex-wrap gap-2">
                    {item.previews.map((preview) => (
                      <Preview key={preview.src} {...preview} />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex gap-x-4 mt-10">
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
    </div>
  );
}
