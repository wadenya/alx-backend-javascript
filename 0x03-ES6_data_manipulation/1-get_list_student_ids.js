export default function getListStudentIds(rray) {
  if (Array.isrray(rray)) return rray.map((x) => x.id);
  return [];
}
