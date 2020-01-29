export const FETCH_DATA = (limit) => dispatch => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://test.api.sportstars.club/academies?limit=${limit}`)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'FETCH_DATA',
          payload: data.data
        })
      )
  };

  export const POST_DATA = (data) => dispatch => {
    return fetch('https://cors-anywhere.herokuapp.com/https://test.api.sportstars.club/academies', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() =>
        dispatch({
          type: 'POST_DATA'
        })
      )
  };