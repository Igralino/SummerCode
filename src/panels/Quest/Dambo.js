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

class Dambo extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div>
                    <div className="categoryText">Квест 5/16</div>
                </Div>

                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14149-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Ну что ж, теперь, когда ты узнал о QA побольше, предлагаю проследовать тебе по пути синего
                        слоника.
                    </Div>

                    <Button component="a" href="https://vk.com/camera" before={<Icon24Qr/>} size="xl">
                        Открыть камеру VK
                    </Button>
                    <Div className="questPS">
                        PS: Начало квеста на ресепшене третьего этажа! </Div>
                </FormLayout>

            </Panel>
        )
    }
}

Dambo.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Dambo;
