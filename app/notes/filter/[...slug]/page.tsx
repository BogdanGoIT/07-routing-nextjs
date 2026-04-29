// app/notes/filter/[...slug]/page.tsx

import { fetchNotes } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NotesByCategoryClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesByCategory({ params }: Props) {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    // КЛЮЧ МАЄ ПОВНІСТЮ ЗБІГАТИСЯ З КЛІЄНТСЬКИМ
    queryKey: ['notes', 1, '', category],
    queryFn: () => fetchNotes(1, '', category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesByCategoryClient />
    </HydrationBoundary>
  );
}
