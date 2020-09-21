
export const SAVE_DATA = 'SAVE_DATA'
export const CHANGE_VIEW = 'CHANGE_VIEW'

export function changeView () {
    return {
      type: CHANGE_VIEW
    }
}

function saveData(responseJson){
  return{
    type: SAVE_DATA,
    data: responseJson
  }
}

export function fetchData (){
  return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
        //this.setState({ imagesData: responseJson, loading: false });
        dispatch(saveData(responseJson))
      })
      .catch((error) => {
        console.error(error);
      });}
}

