import React from 'react';

import MobileCompany from './MobileCompany';
// MobileCompany - компонент которому нужны данные
import { withDataLoad } from './withDataLoad';
// withDataLoad - HOC по загрузке данных

class MobileRoot extends React.PureComponent {

// ---------------------- 2 ---------------------- /
  fetchConfig={
    URL: "http://fe.it-academy.by/TestFetch.php",
    method: 'post',
    headers: {
        "Accept": "application/json",
    },
  };


// ---------------------- 1 ---------------------- /
  // HOC возвращает каждый раз НОВЫЙ, обёрнутый компонент
  // поэтому оборачивать в HOC лучше не внутри render, чтобы не рендерить каждый раз НОВЫЙ компонент
  MobileCompanyWithData=withDataLoad(this.fetchConfig,"companyData")(MobileCompany);
  // this.fetchConfig - загрузить данные по этому конфигу
  // "companyData" - передай компоненту MobileCompany под этим именем 
  // MobileCompany - компонент которому нужны данные
  // withDataLoad - HOC по загрузке данных

  render() {

    let MobileCompanyWithData=this.MobileCompanyWithData;
    return <MobileCompanyWithData /> ;

  }

}

export default MobileRoot;
