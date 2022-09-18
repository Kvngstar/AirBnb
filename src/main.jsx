import React from 'react';
import Reactive from './reactive';
import Data from "./data";

export default function Main() {

    const relate = Data.map((data) => { return (<Reactive img={data.img} rate={data.rate} lesson={data.lesson} price={data.price} count={data.count} />)    })

    return (
      <div className="second-section">
        <div className="secondheader">
          <h2>Online Experience</h2>
          <p>
            Join unique interactive activites led by one-of-a-kind-host-all
            without leaving home.
          </p>
        </div>
            <div
            className='box-cont'>{relate}</div>
      </div>
    );
}