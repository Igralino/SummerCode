import React, {Component} from "react";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import connect from '@vkontakte/vkui-connect'

class Achievement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: props.img ? props.img : "",
            name: props.name ? props.name : "",
            description: props.description ? props.description : "",
            isHidden: props.isHidden ? props.isHidden : false,
        }
    }

    render() {
        return (
            <Div>
                <Div
               onClick={() => {
                connect.send("VKWebAppTapticImpactOccurred", {"style": "medium"});
              }}
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {this.state.isHidden? 
                   <div
                   className='sub2'
                   style={{
                   background: ` url(${this.state.img})`,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                   borderRadius: 12
                   }}
                   /> 
                   : 
                  <div
                  className='sub'
                  style={{
                  backgroundImage: `url(${this.state.img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: 12
                  }}
                  /> 
                }
                
                <div className='tab'>
                  <div
                    className='headerText'
                    style={{
                      marginLeft:20
                    }}
                  >
                    {this.state.name}
                  </div>
                  <div style={{marginLeft:20, color: '#C7CED4'}}>
                      {this.state.description}
                  </div>
                </div>           
              </Div>
            </Div>

        );
    }

}

export default Achievement