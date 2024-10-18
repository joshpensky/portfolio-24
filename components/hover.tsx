"use client";

import { Slot } from "@radix-ui/react-slot";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useId,
  useState,
} from "react";
import { cn } from "~/lib/cn";

interface HoverContextValue {
  lastHoveredId: string | null;
  setLastHoveredId: (id: string) => void;
}

const HoverContext = createContext<HoverContextValue | null>(null);

export interface HoverProps extends PropsWithChildren {}

export function Hover({ children }: HoverProps) {
  const [id, setId] = useState<string | null>(null);

  const setLastHoveredId = useCallback((id: string) => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    setId(id);
  }, []);

  return (
    <HoverContext.Provider value={{ lastHoveredId: id, setLastHoveredId }}>
      {children}
    </HoverContext.Provider>
  );
}

export interface HoverItemProps extends PropsWithChildren {
  hoverClassName?: string;
}

export function HoverItem({ children, hoverClassName }: HoverItemProps) {
  const id = useId();
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error("HoverItem must be used within a Hover");
  }

  const { lastHoveredId, setLastHoveredId } = context;

  const onMouseEnter = () => setLastHoveredId(id);

  return (
    <Slot
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseEnter}
      onFocus={onMouseEnter}
      className={cn(lastHoveredId === id && hoverClassName)}
    >
      {children}
    </Slot>
  );
}
