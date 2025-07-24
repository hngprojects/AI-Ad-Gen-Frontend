export const xyzFeature = {
    all: ['xyz-feature'] as const,
    lists: () => [...xyzFeature.all, 'list'] as const,
    list: (...filters: string[]) => [...xyzFeature.all, 'list', { ...filters }] as const,
    details: () => [...xyzFeature.all, 'detail'] as const,
    detail: (id: string) => [...xyzFeature.details(), id] as const,
  };
