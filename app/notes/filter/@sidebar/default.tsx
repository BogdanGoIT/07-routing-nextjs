import Link from 'next/link';
import css from './SidebarNotes.module.css';
import { fetchNotesResponse } from '@/lib/api';

export default async function SidebarNotes() {
  const notes = await fetchNotesResponse();
  console.log(notes);
  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {notes &&
        notes.map(note => (
          <li key={note.id} className={css.menuItem}>
            <Link href={`/notes/filter/${note.tag}`} className={css.menuLink}>
              {note.tag}
            </Link>
          </li>
        ))}
    </ul>
  );
}
