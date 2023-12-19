import {ApiResponse} from '../interfaces/gobal.interface';
import {
  IStoreCreateApiRequest,
  IStoreGetPartyApiResponse,
  IStoreUpdateFormAndApiRequest,
} from '../interfaces/store.interface';

const URL_SERVER = 'http://192.168.1.45:3000';

export const createStoreParty = async (
  data: IStoreCreateApiRequest,
  token: string,
): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(URL_SERVER + '/stores/create-store-party', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    const responseObject: {message: string} = await response.json();
    let result: ApiResponse<any> = {
      status: true,
      message: responseObject.message,
      data: responseObject,
    };
    if (response.status != 201) {
      result.status = false;
    }
    return result;
  } catch (error) {
    return {status: false, message: 'Have Somthing Wrong'};
  }
};

export const updateStoreParty = async (
  data: IStoreUpdateFormAndApiRequest,
  token: string,
): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(URL_SERVER + '/stores/update-store-party', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    const responseObject: {message: string} = await response.json();
    let result: ApiResponse<any> = {
      status: true,
      message: responseObject.message,
      data: responseObject,
    };
    if (response.status != 201) {
      result.status = false;
    }
    return result;
  } catch (error) {
    return {status: false, message: 'Have Somthing Wrong'};
  }
};

export const deleteStorePartyApi = async (
  id: number,
  token: string,
): Promise<ApiResponse<any>> => {
  try {
    const response: Response = await fetch(
      URL_SERVER + '/stores/delete-store-party',
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id,
        }),
      },
    );
    const responseObject: {message: string} = await response.json();
    let result: ApiResponse<any> = {
      status: true,
      message: responseObject.message,
      data: responseObject,
    };
    if (response.status != 201) {
      result.status = false;
    }
    return result;
  } catch (error) {
    return {status: false, message: 'Have Somthing Wrong'};
  }
};

export const getStorePartyApi = async (
  token: string,
): Promise<ApiResponse<IStoreGetPartyApiResponse>> => {
  try {
    const response: Response = await fetch(URL_SERVER + '/stores/store-party', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseObject:
      | IStoreGetPartyApiResponse[]
      | IStoreGetPartyApiResponse = await response.json();
    let result: ApiResponse<any> = {
      status: true,
      message: '',
      data: responseObject,
    };
    if (response.status != 200) {
      result.status = false;
    }
    return result;
  } catch (error) {
    return {status: false, message: 'Have Somthing Wrong'};
  }
};
