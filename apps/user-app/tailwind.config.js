/** @type {import('tailwindcss').Config} */
import sharedConfig from "@repo/tailwind-config/config";

export default {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ]
} 