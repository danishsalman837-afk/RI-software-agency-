export function getInitials(name: string): string {
  if (!name) return "";
  return name
    .split(" ")
    .filter((n) => n.trim() !== "")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}
