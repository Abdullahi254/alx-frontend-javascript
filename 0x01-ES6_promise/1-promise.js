/* eslint-disable */
export default const getResponseFromAPI = (success)=> {
  return new Promise((res, rej) => {
    if (success){
      res({
        status: 200,
        body: 'Success'
      })
    }
    else {
      rej("The fake API is not working currently");
    }
  });
}
