// app/notes/filter/[...slug]/page.tsx

import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';
// import { fetchTags } from '@/lib/api';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  console.log(category);

  const res = await fetchNotes(1, '', category);
  console.log(res.notes);

  return (
    <div>
      <h1>Notes List</h1>
      {res.notes?.length > 0 && <NoteList notes={res.notes} />}
    </div>
  );
};

export default NotesByCategory;
