import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton'
import FormStatus from '@vkontakte/vkui/dist/components/FormStatus/FormStatus'
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
            answerID: null,
            goodSubmitted: false,
            badSubmitted: false,
        }
    }

    handleAnswerChange = (evt) => {
        connect.send("VKWebAppTapticImpactOccurred", {"style": "medium"});

        this.setState({answerID: evt.target.id});
    };

    handleSubmit = () => {
        if (this.state.answerID === "nastya") {
            this.setState({goodSubmitted: true});
        } else {
            this.setState({badSubmitted: true});
        }
    };

    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div><div className="categoryText">Квест 3/14</div></Div>
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
                        {this.state.goodSubmitted &&
                        <FormStatus title="Молодца, я в тебе не сомневался" state="default">
                            Ищи ее на пятом этаже, в левом крыле!
                        </FormStatus>}
                        {this.state.badSubmitted && <FormStatus title="Ничего, с кем не бывает." state="error">
                            За качество тебе готова пояснить <b>Настя Семенюк</b> - отважный лидер команды QA. Ищи ее на пятом
                            этаже, в левом крыле!
                        </FormStatus>}
                        <Radio name="radio" id="mother" onChange={this.handleAnswerChange}
                               checked={this.state.answerID === "mother"}
                               disabled={this.state.goodSubmitted || this.state.badSubmitted}>Мамка твоя</Radio>
                        <Radio name="radio" id="nastya" onChange={this.handleAnswerChange}
                               checked={this.state.answerID === "nastya"}
                               disabled={this.state.goodSubmitted || this.state.badSubmitted}>Настя Семенюк</Radio>
                        <Radio name="radio" id="durov" onChange={this.handleAnswerChange}
                               checked={this.state.answerID === "durov"}
                               disabled={this.state.goodSubmitted || this.state.badSubmitted}>Павел Дуров</Radio>
                    </div>
                    {(!this.state.goodSubmitted && !this.state.badSubmitted) && <Button size="xl"
                            onClick={this.handleSubmit}>
                        Узнать ответ
                    </Button>}
                    {(this.state.goodSubmitted || this.state.badSubmitted) && <Button size="xl"
                                                                                    onClick={()=>this.props.go("nastya2")}>
                        QR
                    </Button>}
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
