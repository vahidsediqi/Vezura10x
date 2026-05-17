import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Client with write token for mutations (used server-side only)
export function getClient(token?: string) {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !token,
    token,
  });
}
