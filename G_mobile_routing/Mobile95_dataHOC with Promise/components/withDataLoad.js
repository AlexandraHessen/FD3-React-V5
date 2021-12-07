import React from 'react';
import isoFetch from 'isomorphic-fetch';

let withDataLoad = (fetchConfig,propName) => Component => {
  // fetchConfig - конфиг для обращения URL: "http://fe.it-academy.by/TestFetch.php",  method: 'post'
  // propName - под каким именем будет передан props компоненту

    class ComponentWithDataLoad extends React.PureComponent {

// ---------------------- 1 ---------------------- //
/* в componentDidMount делаем запрос на загрузку данных */
        componentDidMount() {
          this.loadData();
        }
      
        state = {
          dataReady: false, // готовы ли данные
          combinedProps: null, // данные которые мы загружаем + propsы которые уже были у оборачиваемого компонента
        };
      
// ---------------------- 3 ---------------------- //
/* ошибка при загрузке данных */
        fetchError = (errorMessage) => {
          console.error(showStr);
        };
      
// ---------------------- 3 ---------------------- //
/* полученные данные кладем в state */
        fetchSuccess = (loadedData) => {
          this.setState({
            dataReady:true, //делаем для того чтобы пока данные не нагружены компонент не рендариться 
            combinedProps:{...this.props,[propName]:loadedData},
            // ложим в  combinedProps все propsы которые уже были у оборачиваемого компонента + данные которые мы загрузили 
            // ...this.props - propsы которые уже были у оборачиваемого компонента     делаем для того чтобы наш оборачиваемый компонент помимо прорса с нашими данными мог получить и другие props
            // propName - под каким именем будет передан props с данными которые загрузили  компоненту
            // loadedData - сами данные которые загрузили 
          });
        };
      
// ---------------------- 2 ---------------------- //
/* функция загрузки данных */        
        loadData = () => {
      
          isoFetch(fetchConfig.URL, fetchConfig)
              .then( response => {
                  if (!response.ok) {
                      throw new Error("fetch error " + response.status);
                  }
                  else
                      return response.json();
              })
              .then( data => {
                  this.fetchSuccess(data);
              })
              .catch( error => {
                  this.fetchError(error.message);
              })
          ;
      
        };
      
        render() {
      
          if ( !this.state.dataReady )
            return <div>загрузка данных...</div>;
      
          return <Component {...this.state.combinedProps} /> ;
          // ...this.state.combinedProps - передаются сразу все propsы. и те которые были + наши полученные данные
        }
      
      }

      return ComponentWithDataLoad;


}

export { withDataLoad };
