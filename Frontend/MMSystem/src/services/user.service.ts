import {
  ILoginApiRequest,
  ILoginApiResponse,
  IRegisterApiRequest,
  IRegisterApiResponse,
  IUser,
  IUserApiResponse,
} from '../interfaces/user.interface';

const URL_SERVER = 'http://192.168.1.45:3000';

export const registerApi = async (
  data: IRegisterApiRequest,
): Promise<IRegisterApiResponse> => {
  try {
    const response = await fetch(URL_SERVER + '/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    const responseObject: IRegisterApiResponse = await response.json();
    return responseObject;
  } catch (error) {
    return {message: 'Have somthing error'};
  }
};

export const loginApi = async (
  data: ILoginApiRequest,
): Promise<ILoginApiResponse> => {
  try {
    const response: Response = await fetch(URL_SERVER + '/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    const responseObject: ILoginApiResponse = await response.json();
    return responseObject;
  } catch (error) {
    return {message: 'Have somthing error'};
  }
};

export const selfApi = async (
  token: string,
): Promise<IUserApiResponse | any> => {
  try {
    const response: Response = await fetch(URL_SERVER + '/users/self', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseObject: IUserApiResponse = await response.json();
    return responseObject;
  } catch (error) {
    return {message: 'Have somthing error'};
  }
};

export const getParty = async (
  token: string,
): Promise<IUserApiResponse[] | any> => {
  try {
    const response: Response = await fetch(URL_SERVER + '/users/get-party', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseObject: IUserApiResponse[] = await response.json();
    return responseObject;
  } catch (error) {
    return {message: 'Have somthing error'};
  }
};
