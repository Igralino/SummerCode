import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import connect from '@vkontakte/vkui-connect';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Icon24Qr from '@vkontakte/icons/dist/24/qr';

import {platform, IOS} from '@vkontakte/vkui';
// import {urlBack} from "../../App";
import "../styles.css";


const osname = platform();


class Lunch extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //
        // }
    }

    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetFriendsResult':
                    this.props.go("zozh");
                    window.location.href = "https://vk.me/id"+e.detail.data["users"][0]["id"];
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
    }

    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div><div className="categoryText">Квест 8/16</div></Div>


                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14153-256" alt="Alexandrov"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Как тебе настольный теннис?)<br/>
                        Одному наверно играть не так весело, поэтому, чтобы поднять себе настроение,
                        давай позовем друга и пойдем поедим
                    </Div>
                    <Button size="xl"
                            onClick={() => {
                                this.props.go("zozh")
                            }}>
                        Пойти поесть!
                    </Button>
                    <Div className="questPS">
                        PS: Начало квеста на ресепшене третьего этажа!                    </Div>
                </FormLayout>

            </Panel>
        )
    }
}

Lunch.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Lunch;
