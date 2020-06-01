import React, { Component } from 'react';

let Quakes = (props) => {
    return (
        <div>
            {props.result.map((item, i) => {
                console.log(this.props)
                return <p key={i}>{item.properties.title}</p>
            })}
        </div>
    )
};

export default Quakes;