﻿"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import CounterButton from '../components/CounterButton';
//импортируем файл который будем тестировать

test('работа CounterButton', () => {

  // создаём тестовую версию компонента который будем тестировать
  const component = renderer.create(
    <CounterButton />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, чтобы вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку
  const buttonElem = component.root.find( el => el.type=='input' /*&& el.props.aaa == 'bbb'*/ );  //или по пропсам найти
  // и "нажмём" на неё
  buttonElem.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */

});
