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

class Kupol extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFinished: this.props.isFinished
        }
    }


    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div><div className="categoryText">Квест 15/16</div></Div>

                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14157-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Купол Зингера воистину прекрасен в это время суток. </Div>

                    <Button size="xl"
                            onClick={() => {this.props.go("final");
                            this.setState({isFinished:!this.state.isFinished});  
                            this.props.unlock(!this.state.isFinished)}}>
                        QR
                    </Button>
                </FormLayout>

            </Panel>
        )
    }
}

Kupol.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Kupol;
