import { headers } from "next/headers";
import { notFound } from "next/navigation";

import N8NClientPage from "./N8NClientPage";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);

const vercelEnv = process.env.VERCEL_ENV;
const nodeEnv = process.env.NODE_ENV ?? "development";
const isProductionRuntime = vercelEnv
  ? vercelEnv === "production"
  : nodeEnv === "production";

const allowedHostsFromEnv = (process.env.N8N_ALLOWED_HOSTS ?? "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

const fallbackSubdomainPrefix = (process.env.N8N_SUBDOMAIN_PREFIX ?? "n8n").toLowerCase();

function normalizeHost(hostHeader: string | null): string {
  if (!hostHeader) {
    return "";
  }

  const hostname = hostHeader.split("/")[0]?.split(":")[0]?.trim().toLowerCase();
  return hostname ?? "";
}

function isLocalHost(hostname: string): boolean {
  if (!hostname) {
    return false;
  }

  return LOCAL_HOSTS.has(hostname) || hostname.endsWith(".localhost");
}

function matchesAllowedHosts(hostname: string): boolean {
  if (!hostname) {
    return false;
  }

  if (allowedHostsFromEnv.length > 0) {
    return allowedHostsFromEnv.some((allowed) => hostname === allowed);
  }

  const [firstLabel = ""] = hostname.split(".");
  return firstLabel === fallbackSubdomainPrefix;
}

export default function N8NPage() {
  const hostname = normalizeHost(headers().get("host"));

  if (
    !isLocalHost(hostname) &&
    isProductionRuntime &&
    !matchesAllowedHosts(hostname)
  ) {
    notFound();
  }

  return <N8NClientPage />;
}
