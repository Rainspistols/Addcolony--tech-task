import keys from './keys';

const _api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

const _apiTodos = 'http://localhost:3000/api/todos';

const _postData = (url = '', data = {}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const getCurrentWeather = (lat, lon) => {
  return fetch(
    `${_api.base}onecall?lat=${lat}&lon=${lon}&exclude=daily,hourly,minutely&appid=${_api.key}&units=metric`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getAllTodos = () => {
  return fetch(_apiTodos + '/').then((res) => res.json());
};

export const addTodoApi = (data) => {
  return _postData(_apiTodos + '/add', data);
};

export const deleteTodoApi = (id) => {
  return _postData(_apiTodos + '/delete', { id });
};

export const editTodoApi = (data) => {
  return _postData(_apiTodos + '/update', data);
};
