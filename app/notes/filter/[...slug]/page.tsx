// app/notes/filter/[...slug]/page.tsx

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  console.log(category);

  return (
    <div>
      <h1>Notes List</h1>
      {/* {response?.notes?.length > 0 && <NoteList notes={response.notes} />} */}
    </div>
  );
};

export default NotesByCategory;
