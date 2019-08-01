import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton'
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import Link from '@vkontakte/vkui/dist/components/Link/Link'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert'
import Icon24Back from '@vkontakte/icons/dist/24/back'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import {platform, IOS} from '@vkontakte/vkui';
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
                    <Button size="xl"
                            onClick={() => {
                                this.props.go("lunch")
                            }}>
                        Подкачаться
                    </Button>
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
