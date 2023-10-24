import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function convertEmojiFromCode(code: string): string {
    return String.fromCodePoint(Number(`0x${code}`));
}
export function hexToRGBA(hex: string, alpha: number) {
    // Remove the hash character if it exists
    hex = hex.replace(/^#/, "");

    // Parse the hex value to separate R, G, and B components
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    // Ensure the alpha value is between 0 and 1
    alpha = Math.min(1, Math.max(0, alpha));

    // Create the RGBA color string
    const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    return rgba;
}
