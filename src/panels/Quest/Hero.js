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

class Hero extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div><div className="categoryText">Квест 14/16</div></Div>

                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14115-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Как оказалось, тебя хотели похвалить за пойманный вирус. Ты теперь народный герой! Предлагаю это
                        дело отметить и сделать крутую фотку с Казанским собором. Я знаю отличное и популярное место для
                        этого, но говорить конечно же не буду. Придется поискать самому! </Div>

                    <Button component="a" href="https://vk.com/camera" before={<Icon24Qr/>} size="xl">
                        Открыть камеру VK
                    </Button>
                </FormLayout>

            </Panel>
        )
    }
}

Hero.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Hero;
