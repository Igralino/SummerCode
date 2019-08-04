import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import {platform, IOS} from '@vkontakte/vkui';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';

// import {urlBack} from "../../App";
import "../styles.css";


const osname = platform();


class Lampas extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //
        // }
    }

    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div><div className="categoryText">Квест 7/16</div></Div>

                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14141-256" alt="Alexandrov"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Уверен, что беготня по этажам тебя немного утомила. Предлагаю подняться на пятый этаж и
                        отдохнуть немного в игровой комнате. Покрас Лампас подскажет тебе верный путь
                    </Div>
                    <Button component="a" href="https://vk.com/camera" before={<Icon24Qr/>} size="xl">
                        Открыть камеру VK
                    </Button>
                    <Div className="questPS">
                        PS: Начало квеста на ресепшене третьего этажа!                    </Div>
                </FormLayout>

            </Panel>
        )
    }
}

Lampas.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Lampas;
