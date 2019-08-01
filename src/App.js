import React from 'react';
import connect from '@vkontakte/vkui-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon28User from '@vkontakte/icons/dist/28/user';
import '@vkontakte/vkui/dist/vkui.css';
import ModalRoot from "@vkontakte/vkui/dist/components/ModalRoot/ModalRoot";
import ModalCard from "@vkontakte/vkui/dist/components/ModalCard/ModalCard";
import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';

import BeginQuest from './panels/Quest/BeginQuest';
import Alexandrov from "./panels/Quest/Alexandrov";
import Nastya from "./panels/Quest/Nastya";
import Nastya2 from "./panels/Quest/Nastya2";
import Dambo from "./panels/Quest/Dambo";
import Dambo2 from "./panels/Quest/Dambo2";
import Lampas from "./panels/Quest/Lampas";

import Achievements from './panels/Achievements';

const MODAL_CARD_MONEY_SEND = 'money-send';


class App extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("activeQuestPanel") === null) {
            localStorage.setItem("activeQuestPanel", "questPanel");
        }
        if (localStorage.getItem("activeAchievementsPanel") === null) {
            localStorage.setItem("activeAchievementsPanel", "achievements");
        }
        this.state = {
            activeQuestPanel: localStorage.getItem("activeQuestPanel"),
            activeAchievementsPanel: localStorage.getItem("activeAchievementsPanel"),

            modalHistory: [],
            activeModal: null,
            authToken: null,
            captchaImage: null,
            popout: null,
            activeStory: "quest"
        };
        this.modalBack = () => {
            this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
        };
        this.onStoryChange = this.onStoryChange.bind(this);
        connect.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#ffffffS"});
    }

    setActiveModal = (activeModal) => {
        activeModal = activeModal || null;
        console.log(this.state.modalHistory);
        let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

        if (activeModal === null) {
            modalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
            modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
        } else {
            modalHistory.push(activeModal);
        }

        this.setState({
            activeModal,
            modalHistory
        });
    };

    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({fetchedUser: e.detail.data});
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
    }

    goQuest = (activeQuestPanel) => {
        this.setState({activeQuestPanel: activeQuestPanel});
        localStorage.setItem("activeQuestPanel", activeQuestPanel);
    };

    onStoryChange(e) {
        connect.send("VKWebAppTapticImpactOccurred", {"style": "light"});
        this.setState({activeStory: e.currentTarget.dataset.story})
    }

    popoutChange = (popoutName) => {
        this.setState({popout: popoutName});
    };

    render() {
        const modal =  ( <ModalRoot activeModal={this.state.activeModal}>
            <ModalCard
                id={MODAL_CARD_MONEY_SEND}
                onClose={() => this.setActiveModal(null)}
                icon={<Icon56MoneyTransferOutline />}
                title="Отправляйте деньги друзьям, используя банковскую карту"
                caption="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
            >
            </ModalCard>
        </ModalRoot>);
        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'quest'}
                        data-story="quest"
                        text="Квест"
                    ><Icon28Game/></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'achievements'}
                        data-story="achievements"
                        text="Достижения"
                    ><Icon28Favorite/></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'top'}
                        data-story="top"
                        text="Топ игроков"
                    ><Icon28User/></TabbarItem>
                </Tabbar>
            }>
                <View id="quest" popout={this.state.popout} activePanel={this.state.activeQuestPanel} modal={modal}>

                    <BeginQuest
                        id="questPanel"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Alexandrov
                        id="alexandrov"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Nastya
                        id="nastya"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Nastya2
                        id="nastya2"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Dambo
                        id="dambo"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Dambo2
                        id="dambo2"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Lampas
                        id="lampas"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />

                </View>
                <View id="achievements" popout={this.state.popout} activePanel={this.state.activeAchievementsPanel}>

                    <Achievements
                        id="achievements"
                        go={this.go}
                        popoutChange={this.popoutChange}
                    />
                </View>
            </Epic>
        );
    }
}

export default App;
