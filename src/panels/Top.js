import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton'
import Header from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import Link from '@vkontakte/vkui/dist/components/Link/Link'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert'
import Icon24Back from '@vkontakte/icons/dist/24/back'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import {platform, IOS} from '@vkontakte/vkui';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

import './styles.css';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
const osname = platform();
const Users=[
    {
        id: 1,
        name: 'Иван Иванов',
        photo: 'https://pp.userapi.com/c841329/v841329000/3dcc/PjEOlu98WS8.jpg?ava=1',
        balls: 50,
    },
    {
        id: 2,
        name: 'Андрей Андреев',
        photo: 'https://pp.userapi.com/c847221/v847221657/1263ac/45WWd3FAUQw.jpg?ava=1',
        balls: 750,
    },
    {
        id: 3,
        name: 'Денис Денисов',
        photo: 'https://sun9-38.userapi.com/c858036/v858036617/532c/BSAlBJrygIs.jpg?ava=1',
        balls: 1350,
    },
    {
        id: 4,
        name: 'Игорь Игорян',
        photo: 'https://pp.userapi.com/c854120/v854120025/a0e02/wYWwPLb0b7I.jpg?ava=1',
        balls: 2000,
    },
    {
        id: 5,
        name: 'Артем Артемьев',
        photo: 'https://sun9-31.userapi.com/c847219/v847219122/19a9d9/6F56F24B5sk.jpg?ava=1',
        balls: 3750,
    },
    
]


class Top extends React.Component {

    constructor(props) {
        super(props);

         this.state = {
         }
    }
    
    render() {
        let {id} = this.props;
        return (
            <Panel id={id}>
            <div>
                <Div><div className="categoryText">Топ игроков</div></Div>
                <Div>
                <div className="settingsCard"
                    style={{
                    display: 'flex',
                    marginTop: -10,
                    borderRadius: 12,
                    flexShrink: 0,
                    flexDirection: 'column'
                    }} 
                >
                    {Users.map(
                    (item, index) => 
                    <Div key={item.id}>
                        <Cell
                        before={<Avatar size={40 } src={item.photo}/>}
                        asideContent={<div style={{color:"#C7CED4"}}>{item.balls} очков</div>}
                        >
                            {item.name}
                        </Cell>
                    </Div>)
                    }
                </div>
                </Div>             

            </div>            
            </Panel>
        )
    }
}

Top.propTypes = {
    id: PropTypes.string.isRequired,
    /*go: PropTypes.func.isRequired,*/
    popoutChange: PropTypes.func.isRequired
};

export default Top;