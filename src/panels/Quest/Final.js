import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import {platform, IOS} from '@vkontakte/vkui';
import connect from "@vkontakte/vkui-connect";
import Icon24Qr from '@vkontakte/icons/dist/24/qr';

// import {urlBack} from "../../App";


const osname = platform();

class Final extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        let {id} = this.props;
        return (
            <Panel id={id} theme="white">
                <Div>
                    <div className="categoryText">Квест 16/16</div>
                </Div>

                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14103-256" alt="Begin"/>
                </Div>
                <FormLayout>
                    <Div align="center">
                        Что ж, вот ты и обошел весь Зингер вдоль и поперек. Конечно остались места, где ты еще не был,
                        но тут ты уже давай сам. Я открою тебе доступ ко вкладке со всеми ачивками, чтобы ты смог
                        понять, каких тебе не хватает и найти их.</Div>
                </FormLayout>

            </Panel>
        )
    }
}

Final.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    popoutChange: PropTypes.func.isRequired,
    modalChange: PropTypes.func.isRequired
};

export default Final;
