export type SortKey = "name" | "modified" | "size";

export type SortDirection = "asc" | "desc";

export interface SortConfiguration {
  key: SortKey;
  direction: SortDirection;
}