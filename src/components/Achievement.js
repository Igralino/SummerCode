import React, {Component} from "react";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon28User from '@vkontakte/icons/dist/28/user';
import connect from '@vkontakte/vkui-connect'

class Achievement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: props.img ? props.img : "",
            name: props.name ? props.name : "",
            description: props.description ? props.description : "",
            src: props.src ? props.src : null,
            link: props.link ? props.link : null,
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
                <div
                  class='sub'
                  style={{
                  backgroundImage: `url(${this.state.img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: 12
                  }}
                /> 
                <div class='tab'>
                  <div
                    class='headerText'
                    style={{
                      color: '#000000'
                    }}
                  >
                    {this.state.name}
                  </div>
                  <div>
                      {this.state.description}
                  </div>
                </div>           
              </Div>
            </Div>

        );
    }

}

export default Achievement