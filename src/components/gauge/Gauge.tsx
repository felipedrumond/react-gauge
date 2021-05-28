import React from 'react';
import './Gauge.scss';

const Gauge = (props: IGaugeProps) => {

    const threshoulds = [
        {
            score: 90,
            colorSyle: 'green',
        },
        {
            score: 75,
            colorSyle: 'yellow',
        },
        {
            score: 50,
            colorSyle: 'orange',
        },
        {
            score: 25,
            colorSyle: 'red',
        },
        {
            score: 0,
            colorSyle: 'red',
        },
    ];

    const getColorClassName = () => {
        const threshould = threshoulds.find(t => t.score <= props.score);
        return threshould?.colorSyle;
    }

    const getRotation = () => {
        return (360 * props.score) / 100 / 2;
    }
    const colorClassName = getColorClassName();
    const rotation = getRotation();

    return (
        <section className="content">
            <div className="score">{props.score}%</div>
            <div className="box gauge">
                <div className="mask">
                    <div className={`semi-circle ${colorClassName}`}></div>
                    <div className="semi-circle--mask"
                        style={{ 
                            transform: `rotate(${rotation}deg) translate3d(0,0,0)`
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Gauge;

export interface IGaugeProps {
    score: number,
    color: string,
    onClick?: () => void,
}
