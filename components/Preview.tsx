"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { X } from "@untitled-ui/icons-react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "~/lib/cn";
import { useFocusVisible } from "react-aria";

interface AssetProps {
  src: string;
  alt?: string;
  mime: string;
  forceAutoPlay?: boolean;
}

function Asset({ src, mime, alt, forceAutoPlay }: AssetProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!shouldReduceMotion || forceAutoPlay) {
      if (video.paused) video.play();
    } else {
      video.pause();
    }
  }, [shouldReduceMotion, forceAutoPlay]);

  if (mime.startsWith("video/")) {
    return (
      <video
        ref={videoRef}
        draggable={false}
        className="absolute inset-0 w-full h-full"
        src={src}
        loop
        muted
        controls={false}
        playsInline
      />
    );
  } else {
    return (
      <Image
        draggable={false}
        className="w-full h-full"
        src={src}
        alt={alt ?? ""}
        unoptimized
        fill
      />
    );
  }
}

export interface PreviewProps {
  src: string;
  mime: string;
  width: number;
  height: number;
}

const springTransition = {
  type: "spring",
  mass: 0.06,
  stiffness: 20,
  damping: 1.8,
  velocity: 10,
};

export function Preview({ src, mime, width, height }: PreviewProps) {
  const id = useId();

  const [open, setOpen] = useState(false);

  const [focus, setFocus] = useState(false);
  const { isFocusVisible } = useFocusVisible();
  const focused = focus && isFocusVisible;

  const shouldReduceMotion = useReducedMotion();

  return (
    <LayoutGroup id={id}>
      <Dialog open={open} onOpenChange={setOpen}>
        <motion.figure
          className={cn(
            "flex shrink-0 bg-foreground/5 group",
            "h-20 rounded-lg aspect-[--aspect] relative"
          )}
          animate={focused ? "hocus" : undefined}
          whileHover="hocus"
          variants={{
            hocus: { scale: 1.03, rotate: -1 },
          }}
        >
          <div
            className="h-full w-full rounded-lg shadow-sm ring-[0.5px] ring-foreground/10"
            style={{ "--aspect": `${width} / ${height}` }}
          >
            <motion.div
              className="h-full aspect-[--aspect] relative rounded-lg overflow-hidden"
              layoutId={shouldReduceMotion ? undefined : "preview"}
              transition={springTransition}
            >
              <Asset src={src} mime={mime} />
            </motion.div>
          </div>

          <DialogTrigger asChild>
            <button
              className="absolute inset-0 outline-none"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            >
              <span className="sr-only">View in full screen</span>
            </button>
          </DialogTrigger>
        </motion.figure>

        <AnimatePresence>
          {open && (
            <DialogPortal forceMount>
              <DialogOverlay asChild>
                <motion.div
                  className="fixed inset-0 z-20 bg-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </DialogOverlay>
              <DialogContent asChild aria-describedby={undefined}>
                <motion.div
                  className="fixed top-0 inset-x-0 h-screen z-20 outline-none flex items-center justify-center !pointer-events-none"
                  style={{ "--aspect": `${width} / ${height}` } as any}
                  variants={{
                    closed: { opacity: 0 },
                    open: { opacity: 1 },
                  }}
                  initial={shouldReduceMotion ? "closed" : "open"}
                  animate={open ? "open" : "closed"}
                  exit={shouldReduceMotion ? "closed" : "open"}
                >
                  <DialogTitle asChild>
                    <h2 className="sr-only">Full-screen preview</h2>
                  </DialogTitle>

                  <DialogClose asChild>
                    <motion.button
                      className={cn(
                        "absolute top-3 left-3 z-10 outline-none pointer-events-auto",
                        "p-2 bg-black/60 backdrop-blur-sm rounded-full",
                        "ring-[0.5px] ring-inset ring-white/10",
                        "focus-visible:ring-1 focus-visible:ring-white"
                      )}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="absolute inset-0 bg-white/15 rounded-full" />
                      <span className="sr-only">Close</span>
                      <X className="w-5 h-5 text-white" />
                    </motion.button>
                  </DialogClose>

                  <motion.div
                    className="flex w-[min(100vw,100vh*var(--aspect))] sm:w-[min(100vw-2rem,(100dvh-2rem)*var(--aspect))] sm:rounded-lg aspect-[--aspect] relative overflow-hidden pointer-events-auto"
                    layoutId={shouldReduceMotion ? undefined : "preview"}
                    drag
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    onDragEnd={(_event, info) => {
                      if (
                        Math.abs(info.velocity.x) > 100 ||
                        Math.abs(info.velocity.y) > 100 ||
                        Math.abs(info.offset.x) > 100 ||
                        Math.abs(info.offset.y) > 100
                      ) {
                        setOpen(false);
                      }
                    }}
                    dragTransition={{
                      bounceStiffness: 300,
                      bounceDamping: 20,
                    }}
                    transition={springTransition}
                  >
                    <Asset src={src} mime={mime} forceAutoPlay />
                  </motion.div>
                </motion.div>
              </DialogContent>
            </DialogPortal>
          )}
        </AnimatePresence>
      </Dialog>
    </LayoutGroup>
  );
}
