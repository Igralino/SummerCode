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

class Alexandrov extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div>
                    <div className="categoryText">Квест 2/16</div>
                </Div>
                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14153-256" alt="Alexandrov"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Итак, начнем с самого главного места, куда стекаются толпы работников ежедневно, чтобы
                        поговорить по душам, перекусить и просто хорошо провести время - кухни 3 этажа. Отправляйся туда
                        и найди там Александрова
                    </Div>
                    <Button component="a" href="https://vk.com/camera" before={<Icon24Qr/>}
                            onClick={() => this.props.go("nastya")}
                            size="xl">
                        Открыть камеру VK
                    </Button>
                    <Div className="questPS">
                        PS: Начало квеста на ресепшене третьего этажа! </Div>
                </FormLayout>

            </Panel>
        )
    }
}

Alexandrov.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Alexandrov;
