'use client';

import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function NotesByCategoryClient() {
  const { slug } = useParams<{ slug: string[] }>();

  const category = slug[0] === 'all' ? undefined : slug[0];

  const { data: notes } = useQuery({
    queryKey: ['notes', 1, '', category],
    queryFn: () => fetchNotes(1, '', category),
    refetchOnMount: false,
  });

  if (!notes) return <div>Loading...</div>;

  return <div>{notes?.notes.length > 0 && <NoteList notes={notes.notes} />}</div>;
}
