import ClassRoom from './0-classroom.js';

export default const initializeRooms = ()=>{
  return [19, 20, 34].map(val=> new ClassRoom(val));
} 
