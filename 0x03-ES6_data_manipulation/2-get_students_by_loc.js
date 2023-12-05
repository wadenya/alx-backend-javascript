export default function getStudentsByLocation(student, city) {
  return students.filter((student) => student.location.localeCompare(city) === 0);
}
