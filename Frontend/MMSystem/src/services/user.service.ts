export const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};

export const registerApi = async (username: any, password: any) => {
  try {
    const response = await fetch('http://192.168.1.45:3000/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        role: 'admin',
        party: 2,
      }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export const loginApi = async (username: any, password: any) => {
  try {
    const response = await fetch('http://192.168.1.45:3000/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
