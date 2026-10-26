/*
 * The projects in the order the home page shows them: by each file's `order`, then by name, so two that
 * share a number still come out the same way every build.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type WorkEntry = CollectionEntry<'work'>;
export type AlsoEntry = CollectionEntry<'also'>;

const byOrder = <T extends { id: string; data: { order: number } }>(a: T, b: T): number =>
  a.data.order - b.data.order || a.id.localeCompare(b.id);

export const getWork = async (): Promise<WorkEntry[]> =>
  (await getCollection('work')).sort(byOrder);

export const getAlso = async (): Promise<AlsoEntry[]> =>
  (await getCollection('also')).sort(byOrder);
