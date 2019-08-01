import React from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
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
import './styles.css';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Achievement from '../components/Achievement'
const osname = platform();
const AchievementsBasic=[
    {
        id: 1,
        name: 'Welcome to the club, buddy',
        description: 'Открыть сервис',
        img: 'https://vk.com/sticker/1-14085-256',
        isHidden: false,
        hash: 'welcome'
    },
    {
        id: 2,
        name: 'Вдарим по Александрову?',
        description: 'Взять из холодильника те самые сырки',
        img: 'https://vk.com/sticker/1-14153-256',
        isHidden: false,
        hash: 'byalex'
    },
    {
        id: 3,
        name: 'Won’t fix',
        description: 'Сходить в крыло QA',
        img: 'https://vk.com/sticker/1-14085-256',
        isHidden: false,
        hash: 'qa'
    },
    {
        id: 4,
        name: 'Дамбо',
        description: 'Попыхтим?',
        img: 'http://vk.com/sticker/1-13769-256-9',
        isHidden: false,
        hash: 'dambo'
    },
    {
        id: 5,
        name: 'Го катку, я создал',
        description: 'Найди код в игровой комнате?',
        img: 'http://vk.com/sticker/1-13935-256',
        isHidden: false,
        hash: 'gamemode'
    },
    {
        id: 6,
        name: 'По НаЛанчу?',
        description: 'Позвать друга на обед',
        img: 'http://vk.com/sticker/1-13831-256',
        isHidden: false,
        hash: 'golunch'
    },
    {
        id: 7,
        name: 'За ЗОЖ!',
        description: 'Подняться пешком на 6 этаж',
        img: 'http://vk.com/images/stickers/7243/256.png',
        isHidden: false,
        hash: 'zoj'
    },
    {
        id: 8,
        name: 'Я МЕГАЗВЕЗДА',
        description: 'Найти стену с автографами известных личностей',
        img: 'http://vk.com/images/stickers/5389/256.png',
        isHidden: false,
        hash: 'superstar'
    },
    {
        id: 9,
        name: 'Настоящий артефакт эпохи',
        description: 'Найти полотно пиксель-баттла',
        img: 'http://vk.com/images/stickers/10223/256.png',
        isHidden: false,
        hash: 'pixel'
    },
    {
        id: 10,
        name: 'Вирус, замаскированный под uTorrent',
        description: 'Подойти на 7 этаж для дополнительной проверки антивирусом',
        img: 'https://vk.com/sticker/1-10006-256',
        isHidden: false,
        hash: 'admins'
    },
    {
        id: 11,
        name: 'Под колпаком',
        description: 'А я смотрю, ты любишь пожестче',
        img: 'https://vk.com/images/stickers/3329/256.png',
        isHidden: false,
        hash: 'bdsm'
    },
    {
        id: 12,
        name: 'Лучший вид на Казанский',
        description: 'Выложить историю с Казанским собором',
        img: 'https://vk.com/sticker/1-8625-256',
        isHidden: false,
        hash: 'kazansky'
    },
    {
        id: 13,
        name: 'Дом Зингера',
        description: 'Пройти квест кролика Олега',
        img: 'http://vk.com/sticker/1-14112-256',
        isHidden: false,
        hash: 'complete'
    },
]

const AchievementsBrothers = [
    {
        id: 17,
        name: 'Работать не пробовали?',
        description: 'Кто-то забыл добавить описание',
        img: 'https://vk.com/sticker/1-14145-256',
        isHidden: true,
        hash: 'gowork'
    },
    {
        id: 21,
        name: 'Хоу-хоу-хоу',
        description: 'Что-то про VK Coin',
        img: 'https://vk.com/sticker/1-3774-256',
        isHidden: true,
        hash: 'musicroom'
    },
    {
        id: 25,
        name: 'Don’t panic',
        description: 'Пройти путь джедая',
        img: 'http://vk.com/images/stickers/5551/256.png',
        isHidden: true,
        hash: 'adminpanic'
    },
]

const AchievementsPlaces = [
    {
        id: 15,
        name: 'Тайная комната',
        description: 'Сходить в красную уборную Зингера',
        img: 'https://vk.com/sticker/1-2923-256',
        isHidden: true,
        hash: 'room'
    },
    {
        id: 16,
        name: 'Орлиное зрение',
        description: 'Забраться на самую высокую точку в Зингере',
        img: 'http://vk.com/sticker/1-13952-256',
        isHidden: true,
        hash: 'eagle'
    },
    {
        id: 22,
        name: 'Историческая фигня',
        description: 'Найдется сдача с 5К?',
        img: 'https://vk.com/sticker/1-3774-256',
        isHidden: true,
        hash: 'durov'
    },
    {
        id: 23,
        name: 'Вперед, Плотва!',
        description: 'Почувствовать себя Геральтом из Ривии',
        img: 'http://vk.com/images/stickers/10262/256.png',
        isHidden: true,
        hash: 'pony'
    },
    {
        id: 24,
        name: 'Соня',
        description: 'Заночевать в Зингере',
        img: 'https://vk.com/sticker/1-2464-256',
        isHidden: true,
        hash: 'somesleep'
    },
]

const AchievementsDepartments = [
    
    {
        id: 18,
        name: 'Как?',
        description: 'Вы еще не слышали про VK Pay?',
        img: 'https://vk.com/sticker/1-13367-256',
        isHidden: true,
        hash: 'vkpay'
    },
    {
        id: 19,
        name: 'Олег!',
        description: 'Где макет?',
        img: 'https://vk.com/sticker/1-14133-256',
        isHidden: true,
        hash: 'olegmaket'
    },
    {
        id: 20,
        name: 'Пошумим б#@?ь!',
        description: 'Скибиди-ва-па-па',
        img: 'https://vk.com/images/stickers/10094/256.png',
        isHidden: true,
        hash: 'musicroom'
    },
    
]

const AchievementsEpic = [
    {
        id: 14,
        name: 'Fuck Yeah',
        description: 'Собрать все ачивки',
        img: 'https://vk.com/sticker/1-5088-256',
        isHidden: true,
        hash: 'fuckyeah'
    },
]
class Achievements extends React.Component {

    constructor(props) {
        super(props);

         this.state = {
            isFinished: this.props.isFinished
         }
    }
    achievementsRender(){
        return(
            <div>
                <Div><div className="categoryText">Квест от Олега</div></Div>
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
                    {AchievementsBasic.map(
                    (item, index) => 
                    <Achievement key={item.id} name={item.name} description={item.description} isHidden={item.isHidden} img={item.img}/>)
                    }
                </div>
                </Div>             

                <Div><div className="categoryText">Братья наши меньшие</div></Div>
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
                    {AchievementsBrothers.map(
                    (item, index) => 
                    <Achievement key={item.id} name={item.name} description={item.description} isHidden={item.isHidden} img={item.img}/>)
                    }
                </div>
                </Div> 

                <Div><div className="categoryText">Места</div></Div>
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
                    {AchievementsPlaces.map(
                    (item, index) => 
                    <Achievement key={item.id} name={item.name} description={item.description} isHidden={item.isHidden} img={item.img}/>)
                    }
                </div>
                </Div> 

                <Div><div className="categoryText">Отделы</div></Div>
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
                    {AchievementsDepartments.map(
                    (item, index) => 
                    <Achievement key={item.id} name={item.name} description={item.description} isHidden={item.isHidden} img={item.img}/>)
                    }
                </div>
                </Div> 

                <Div><div className="categoryText">Ультра редкая</div></Div>
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
                    {AchievementsEpic.map(
                    (item, index) => 
                    <Achievement key={item.id} name={item.name} description={item.description} isHidden={item.isHidden} img={item.img}/>)
                    }
                </div>
                </Div> 
            </div>
        )
    }
    errorRender(){
        return(
            <div>
                <Div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <br/> <br/>
                    <img width="170" height="170" src="https://vk.com/sticker/1-14137-512" alt="error"/>
                    <FormLayout>
                    <Div align="center">
                        Ой, кажется Олег отказывается показывать достижения, пока ты не пройдешь весь квест. Прости :(
                    </Div>
                </FormLayout>
                </Div>
            </div>
        )
    }
    render() {
        let {id} = this.props;
        return (
            <Panel id={id}>
                {this.state.isFinished ? this.achievementsRender() : this.errorRender()}
            </Panel>
        )
    }
}

Achievements.propTypes = {
    id: PropTypes.string.isRequired,
    /*go: PropTypes.func.isRequired,*/
    popoutChange: PropTypes.func.isRequired
};

export default Achievements;
