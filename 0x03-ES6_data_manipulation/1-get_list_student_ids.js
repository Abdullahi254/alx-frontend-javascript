export default const getListStudentIds = (list)=> {
  if (list.length > 0){
    return list.map(obj=>obj.id);
  }
  return [];
}
