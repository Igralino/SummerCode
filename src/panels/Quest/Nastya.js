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
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio'
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert'
import Icon24Back from '@vkontakte/icons/dist/24/back'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import {platform, IOS} from '@vkontakte/vkui';
import connect from "@vkontakte/vkui-connect";

// import {urlBack} from "../../App";


const osname = platform();

class Nastya extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            answerID: null
        }
    }

    handleAnswerChange = (evt) => {
        connect.send("VKWebAppTapticImpactOccurred", {"style": "medium"});

        this.setState({answerID: evt.target.id});
    };

    handleSubmit = (evt) => {
        const queryParams = window.location.search;
        const userURL = urlBack + "userInfo";
        let formData = {
            name: this.state.name,
            surname: this.state.surname,
            patronymic: this.state.patronymic,
            documentID: this.state.documentID,
            documentType: this.state.documentType,
            region: this.state.region,
            vkParams: queryParams
        };

    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <PanelHeader theme="alternate"
                    //          left={
                    // <HeaderButton onClick={() => {sessionStorage.removeItem("captcha"); this.props.go("register");}}>{osname === IOS ? <Icon28ChevronBack fill="#5181b8"/> :
                    //     <Icon24Back fill="#5181b8"/>}</HeaderButton>}
                >
                    Квест 3/14</PanelHeader>
                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14085-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Ну как, вкусно? Еще бы, ведь сырки Александрова считаются самыми вкусными и качественными. А
                        знаешь, кто еще может пояснить за качество?
                    </Div>
                    <div>
                        <Radio name="radio" id="mother" onChange={this.handleAnswerChange}
                               checked={this.state.answerID === "mother"}>Мамка твоя</Radio>
                        <Radio name="radio" id="nastya" onChange={this.handleAnswerChange}
                               checked={this.state.answerID === "nastya"}>Настя Семенюк</Radio>
                        <Radio name="radio" id="durov" onChange={this.handleAnswerChange}
                               checked={this.state.answerID === "durov"}>Павел Дуров</Radio>
                    </div>
                    <Button size="xl"
                            onClick={() => this.props.go("alexandrov")}>
                        Узнать ответ
                    </Button>
                </FormLayout>

            </Panel>
        )
    }
}

Nastya.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Nastya;
