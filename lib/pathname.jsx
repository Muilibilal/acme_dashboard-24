"use client";

// trying to see if i can import the path from here into a server component  instead of changing the whole component into a client component

import { usePathname } from "next/navigation";

export const pathname = usePathname();
