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


const osname = platform();

class BeginQuest extends React.Component {

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
                <PanelHeader theme="alternate"
                    //          left={
                    // <HeaderButton onClick={() => {sessionStorage.removeItem("captcha"); this.props.go("register");}}>{osname === IOS ? <Icon28ChevronBack fill="#5181b8"/> :
                    //     <Icon24Back fill="#5181b8"/>}</HeaderButton>}
                >
                    Квест 1/14</PanelHeader>
                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14085-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        <h1>Привет!</h1>
                        Добро пожаловать ВКонтакте - в офис самой крупной социальной сети в Европе. Лови первую
                        ачивку за такое дело! Давай изучим подробно что здесь есть?
                    </Div>
                    <Button size="xl"
                            onClick={()=>this.props.go("alexandrov")}>
                        Поехали
                    </Button>
                </FormLayout>

            </Panel>
        )
    }
}

BeginQuest.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default BeginQuest;
