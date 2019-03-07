import {render, getAllByTestId} from 'react-testing-library';
import App from '../App';
import {Clock, getName} from '../App';
import React from 'react';

describe('test all app functionality', () => {
  
  // test ('render app', () => {

  //   const payload = {
  //     firstName: 'alejandro',
  //     preferredName: 'Alex'
  //   };

  // const {getByLabelText} = render(<Clock />);
  // console.log();
  // });
  test('get name without preferred name', () => {
    const payload = {
          firstName: 'alejandro',
          preferredName: 'Alex'
        };
        expect(getName(payload)).toMatch('alejandro');
  });

});