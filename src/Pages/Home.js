import React, { Component } from 'react'
import Table from '../Component/Answer'
import Voice from "./Voice"
import Question from './Question';
import { assetsImages } from '../Constant/images';
import Answer from '../Component/Answer';

export class Home extends Component {
  render() {
    return (
      <div className='home d-flex flex-wrap justify-content-center align-items-center'>
        <div className='col-6 p-0 d-flex flex-wrap justify-content-center content'>
        < Question />
          <Answer />
          <Voice />
        </div>
       
      </div>
    )
  }
}

export default Home