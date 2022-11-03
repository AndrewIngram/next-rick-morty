import ms from "ms";

export function extractHost(url: string) {
  const { host } = new URL(url);
  return host;
}

export function timeAgo(ageMs: number) {
  const map = {
    s: "seconds",
    ms: "milliseconds",
    m: "minutes",
    h: "hours",
    d: "days",
  };

  const date = new Date(ageMs * 1000).getTime() || 0;

  return date
    ? ms(new Date() - date).replace(/[a-z]+/, (str) => " " + map[str])
    : "";
}
