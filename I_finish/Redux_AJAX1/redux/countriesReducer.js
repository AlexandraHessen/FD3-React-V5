// ---------------- САМА ФУНКЦИЯ REDUСER  ----------------//
// REDUCER не делает запрос в Ajax, логика должна быть в компоненте
import { COUNTRIES_LOADING, COUNTRIES_ERROR, COUNTRIES_SET } from './countriesAC';
//название action type


// начальный state
const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null, //даные которые мы загрузили по сети

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function countriesReducer(state=initState,action) {
  switch (action.type) {

    case COUNTRIES_LOADING: {
      let newState={
        status:1,
        data:null,
      };
      return newState;
    }

    case COUNTRIES_ERROR: {
      let newState={
        status:2,
        data:null,
      };
      return newState;
    }

    case COUNTRIES_SET: {
      let newState={
        status:3,
        data:action.countries, //загруженные данные
      };
      return newState;
    }
    
    //обязатнльно пишем на тот случай если пришел action который не относится к этому reducery
    default:
      return state;
  }
}

export default countriesReducer;
