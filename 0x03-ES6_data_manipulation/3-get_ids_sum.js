export default const getStudentIdsSum = (list)=> {
  return list.reduce((acc, obj)=> acc + obj.id);
}
