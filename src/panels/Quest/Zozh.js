import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import FormStatus from '@vkontakte/vkui/dist/components/FormStatus/FormStatus'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio'
import {platform, IOS} from '@vkontakte/vkui';
import connect from "@vkontakte/vkui-connect";
import Icon24Qr from '@vkontakte/icons/dist/24/qr';

// import {urlBack} from "../../App";


const osname = platform();

class Zozh extends React.Component {

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
        if (this.state.answerID === "yes") {
            this.setState({goodSubmitted: true});
        } else {
            this.setState({badSubmitted: true});
        }
    };

    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div>
                    <div className="categoryText">Квест 9/16</div>
                </Div>

                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14151-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Надеюсь, ты наелся, потому что сейчас нам придется опять бегать по этажам. Можешь конечно
                        воспользоваться лифтом, но ВКонтакте очень ценит спортивный образ жизни. Дело твое конечно, как
                        пойдешь?
                    </Div>
                    <div>
                        {this.state.goodSubmitted &&
                        <FormStatus title="Правильный выбор! " state="default">
                            За ЗОЖ и двор стреляю в упор
                        </FormStatus>}
                        {this.state.badSubmitted && <FormStatus title="Эх..." state="default">
                            Лифт Зингера действительно прекрасный, но все же советую тебе начать ходить пешком.
                        </FormStatus>}
                        <Radio name="radio" id="yes" onChange={this.handleAnswerChange}
                               checked={this.state.answerID === "yes"}
                               disabled={this.state.goodSubmitted || this.state.badSubmitted}>Только пешком, только
                            хардкор!</Radio>
                        <Radio name="radio" id="no" onChange={this.handleAnswerChange}
                               checked={this.state.answerID === "no"}
                               disabled={this.state.goodSubmitted || this.state.badSubmitted}>Я никогда не видел такого
                            прекрасного лифта, не могу отказать себе в таком удовольствии!</Radio>

                    </div>
                    {(!this.state.goodSubmitted && !this.state.badSubmitted) && this.state.answerID !== null &&
                    <Button size="xl"
                            onClick={this.handleSubmit}>
                        Ииии...
                    </Button>}
                    {(this.state.goodSubmitted || this.state.badSubmitted) && <Button component="a" href="https://vk.com/camera" before={<Icon24Qr/>} size="xl">
                        Открыть камеру VK
                    </Button>}
                </FormLayout>

            </Panel>
        )
    }
}

Zozh.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Zozh;
