/*
 * The projects in the order the home page shows them: by group first (the groups below, in this order), then
 * by each file's `order`, then by name, so two that share a number still come out the same way every build.
 * The plate numbers count straight through the groups, so a project's number is the same on the home page
 * and on its own page.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Work } from '../content/schema';

export type WorkEntry = CollectionEntry<'work'>;
export type Kind = Work['kind'];

/** The groups, strongest evidence for a client first. `id` is also the section's anchor on the home page. */
export const kinds: readonly { id: Kind; title: string }[] = [
  { id: 'clients', title: 'For clients and customers' },
  { id: 'games', title: 'Games' },
  { id: 'kids', title: 'For my kids' },
  { id: 'tools', title: 'AI tools' },
];

const rank = (kind: Kind): number => kinds.findIndex((k) => k.id === kind);

const byKindThenOrder = <T extends { id: string; data: { kind: Kind; order: number } }>(
  a: T,
  b: T,
): number =>
  rank(a.data.kind) - rank(b.data.kind) || a.data.order - b.data.order || a.id.localeCompare(b.id);

export const getWork = async (): Promise<WorkEntry[]> =>
  (await getCollection('work')).sort(byKindThenOrder);
