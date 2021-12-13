import { COUNTER_BUTTON_CREATE, COUNTER_BUTTON_ADD } from './countersAC';
//название action type

// начальный state
const initState={

  // ключ - идентификатор счётчика, значение - число нажатий
  cnts: {},

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function countersReducer(state=initState,action) {
  // теперь в action будет не только type но и counterid
  switch (action.type) {

    case COUNTER_BUTTON_CREATE: {
      // надо создать новый счётчик
      // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);

      
//-------------- ВНЕСЕНИЕ ИММУТАБЕЛЬНЫХ ИЗМЕНЕНИЙ В ХЭШ --------------//

      let newState={...state, //старый state
        cnts:{...state.cnts, //заменить старые счетчики на теже + новый с новым id 
          [action.counterid]:0 //+ новый с новым id 
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    case COUNTER_BUTTON_ADD: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state, //старый state
        cnts:{...state.cnts, //заменить старые счетчики на теже 
          // ПРИЛЕТИТ какой счетчик (counterid) изменить и насколько(addvalue)
          [action.counterid]:state.cnts[action.counterid]+action.addvalue //+
          //[action.counterid] - В нужном счетчике 
          // state.cnts[action.counterid] - его старое значение 
          // action.addvalue - изменить на прилетевшее
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }


    //обязатнльно пишем на тот случай если пришел action который не относится к этому reducery
    default:
      return state;
  }
}

export default countersReducer;
