import Link from "next/link";
import { ContactItem, ContactList } from "~/components/ContactList";
import { Hover, HoverItem } from "~/components/hover";
import { Table, TableItem } from "~/components/Table";
import { cn } from "~/lib/cn";

const work: TableItem[] = [
  {
    year: 2022,
    ongoing: true,
    title: "Marathon",
    meta: "Founder",
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
    meta: "Lead Engineer",
    href: null,
  },
  {
    year: 2022,
    title: "GoNoodle",
    meta: "Lead Engineer",
    href: "https://gonoodle.com",
  },
  {
    year: 2021,
    title: "Koala Health",
    meta: "Senior Engineer",
    href: "https://koala.health",
  },
];

const projects: TableItem[] = [
  {
    year: 2024,
    title: "Baselayer",
    meta: "Productivity",
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
    meta: "Health",
    href: "https://apps.apple.com/ro/app/spectacles-cbt-partner/id6443663992",
  },
  {
    year: 2021,
    title: "Myseum",
    meta: "Art",
    href: "https://myseum.space",
  },
];

const writings: TableItem[] = [
  {
    year: 2024,
    title: "Accelerating Time to Value",
    meta: "Upstatement",
    href: "https://upstatement.com/blog/introducing-baselayer",
  },
  {
    year: 2024,
    title: "Watching TV with Marathon",
    meta: "Railway",
    href: "https://blog.railway.com/p/marathon-tv-app",
  },
  {
    year: 2023,
    title: "How a Start-Up Founder Manages Its Backlog",
    meta: "Upstatement",
    href: "https://upstatement.com/blog/how-a-start-up-founder-manages-its-backlog",
  },
];

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
      <main className={cn("flex flex-col gap-4 max-w-lg mx-auto")}>
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
              Marathon has been featured in the App Store, Tom&apos;s Guide,
              Lifehacker, and The Verge, and has a growing community of over
              21,000 members.
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

          <Table items={work} metaColumnLabel="Role" />
        </section>

        <section className="flex flex-col mt-4">
          <h2 className="font-medium mb-3">Projects</h2>

          <Table items={projects} metaColumnLabel="Focus" />
        </section>

        <section className="flex flex-col mt-4">
          <h2 className="font-medium mb-3">Writing</h2>

          <Table items={writings} metaColumnLabel="Publisher" />
        </section>

        <section className="flex gap-x-4 mt-12">
          <h2 className="sr-only">Contact</h2>

          <ContactList items={contact} />
        </section>
      </main>
    </div>
  );
}
