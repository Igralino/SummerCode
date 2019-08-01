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
// import '../styles.css';

const osname = platform();

class Achievements extends React.Component {

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
                    Достижения</PanelHeader>
                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <img src="" alt="CAPTCHA"/>
                </Div>
                <FormLayout>
                    <Input pattern="\d*"
                           // onChange={}
                           // value={code}
                           placeholder="000000"
                           maxLength="6"
                           type="tel"
                           alignment="center"/>
                    <Button
                        // disabled={!this.state.isEnabled}
                            // onClick={}
                            size="xl">Отправить</Button>
                </FormLayout>

            </Panel>
        )
    }
}

Achievements.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired
};

export default Achievements;
