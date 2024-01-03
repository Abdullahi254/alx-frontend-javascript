import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userData = await signUpUser(firstName, lastName);
  const fileData = await uploadPhoto(fileName);

  return Promise.resolve([userData, fileData]);
}
