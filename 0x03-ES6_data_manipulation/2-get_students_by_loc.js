export default function getStudentsByLocation(student, city) {
  return students.filter((student) => student.location.locatcomp(city) === 0);
}
