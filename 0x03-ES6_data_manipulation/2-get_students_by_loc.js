export default const getStudentsByLocation = (list, city)=> {
  if (list.length > 0) {
    return list.filter(obj=>list.location === city);
  }
  return [];
}
