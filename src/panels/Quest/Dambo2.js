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

class Dambo2 extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div><div className="categoryText">Квест 6/16</div></Div>

                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14157-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Ещё не делал памятное фото с логотипом ВК? <br/>
                        Это одно из самых популярных мест в Зингере!
                    </Div>

                    <Button  size="xl" onClick={()=>this.props.go("lampas")}>
                        Далее
                    </Button>
                    <Div className="questPS">
                        PS: Начало квеста на ресепшене третьего этажа!                    </Div>
                </FormLayout>

            </Panel>
        )
    }
}

Dambo2.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Dambo2;
