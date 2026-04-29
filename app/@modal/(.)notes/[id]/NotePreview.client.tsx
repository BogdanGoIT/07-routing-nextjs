'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';

type Props = {
  id: string;
};

export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();

  const { data: note } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Modal onClose={() => router.back()}>
      <h2>{note?.title}</h2>
      <p>{note?.content}</p>
      <p>{note?.tag}</p>
      <p>{note?.createdAt}</p>
      <button onClick={() => router.back()}>Close</button>
    </Modal>
  );
}
