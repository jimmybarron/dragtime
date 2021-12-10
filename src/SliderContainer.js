import { React, useRef } from 'react'
import Slider from './Slider';

const SliderContainer = props => {

    const sliderContainerRef = useRef(null)

    const variants = {
        hidden: {
            opacity: 0
        },
        
        visible: {
            opacity: 1
        }
    }

    return (

        <div
            id={props.id}
            className="numberSlider"
            style={{
                display: "flex",
                flexDirection: "column",
                position: 'relative',
                width: props.width,
                height: "75vh",
                overflow: "visible",
            }}
            variants={variants}
            animate={props.mode === 'edit' && 'hidden'}
        >
            
            <svg
                className="indicators"
                width="100%"
                height="80%"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    overflow: "visible",
                    position: "absolute",
                    marginTop: '4rem',
            }}>

                <svg>
                    <line x1="50%" x2="50%" y1="0%" y2="100%" stroke="#666" strokeWidth="2"/>
                </svg>

                <svg style={{overflow: 'visible'}}>
                    <circle cx="50%" cy="0%" r="3" fill="#666"/>
                </svg>

                <svg>
                    <circle cx="50%" cy="11.1%" r="3" fill="#666"/>
                </svg>

                <svg>
                    <circle cx="50%" cy="22.2%" r="3" fill="#666"/>
                </svg>

                <svg>
                    <circle cx="50%" cy="33.3%" r="3" fill="#666"/>
                </svg>

                <svg>
                    <circle cx="50%" cy="44.4%" r="3" fill="#666"/>
                </svg>

                <svg>
                    <circle cx="50%" cy="55.5%" r="3" fill="#666"/>
                </svg>

                <svg>
                    <circle cx="50%" cy="66.6%" r="3" fill="#666"/>
                </svg>

                <svg>
                    <circle cx="50%" cy="77.7%" r="3" fill="#666"/>
                </svg>

                <svg>
                    <circle cx="50%" cy="88.8%" r="3" fill="#666"/>
                </svg>

                <svg style={{overflow: 'visible'}}>
                    <circle cx="50%" cy="100%" r="3" fill="#666"/>
                </svg>

            </svg>

            <div
                ref={sliderContainerRef}
                className="sliderContainer"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'flex-end',
                    position: 'relative',
                    width: props.width,
                    height: "100%",
            }}>
    
                <Slider
                    {...props}
                    ref={sliderContainerRef}
                />
            
            </div>

        </div>
        
    )
}

export default SliderContainer;