import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import {platform, IOS} from '@vkontakte/vkui';
import connect from "@vkontakte/vkui-connect";
import Icon24Qr from '@vkontakte/icons/dist/24/qr';

// import {urlBack} from "../../App";


const osname = platform();

class Virus extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div><div className="categoryText">Квест 12/16</div></Div>

                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14109-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        До сих пор ловлю флешбэки с того дня. Или нет? Черт, ты где-то умудрился подцепить вирус, нам
                        нельзя медлить. Скорее отправляйся к мастерам своего дела!
                    </Div>

                    <Button component="a" href="https://vk.com/camera" before={<Icon24Qr/>} size="xl">
                        Открыть камеру VK
                    </Button>
                </FormLayout>

            </Panel>
        )
    }
}

Virus.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Virus;
