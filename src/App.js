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
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';

import BeginQuest from './panels/Quest/BeginQuest';
import Alexandrov from "./panels/Quest/Alexandrov";
import Nastya from "./panels/Quest/Nastya";
import Nastya2 from "./panels/Quest/Nastya2";
import Dambo from "./panels/Quest/Dambo";
import Dambo2 from "./panels/Quest/Dambo2";
import Lampas from "./panels/Quest/Lampas";
import Lunch from "./panels/Quest/Lunch";
import Zozh from "./panels/Quest/Zozh";
import Stars from "./panels/Quest/Stars";
import Pixel from "./panels/Quest/Pixel";
import Virus from "./panels/Quest/Virus";
import Hell from "./panels/Quest/Hell";
import Hero from "./panels/Quest/Hero";
import Kupol from "./panels/Quest/Kupol";
import Final from "./panels/Quest/Final";

import Achievements from './panels/Achievements';
import Top from './panels/Top';

import {
    AchievementsBasic,
    AchievementsDepartments,
    AchievementsEpic,
    AchievementsBrothers,
    AchievementsPlaces
} from './panels/Achievements';

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
        if (localStorage.getItem("lastScanned") === null) {
            localStorage.setItem("lastScanned", "1");
        }
        if (localStorage.getItem("activeTopPanel") === null) {
            localStorage.setItem("activeTopPanel", "top");
        }
        this.state = {
            activeQuestPanel: localStorage.getItem("activeQuestPanel"),
            activeAchievementsPanel: localStorage.getItem("activeAchievementsPanel"),
            activeTopPanel: localStorage.getItem("activeTopPanel"),


            activeAchievement: {
                id: -1,
                name: '',
                description: '',
                img: '',
                isHidden: false,
                hash: 'empty'
            },
            modalHistory: [],
            activeModal: null,
            authToken: null,
            captchaImage: null,
            lastScanned: parseInt(localStorage.getItem("lastScanned")),
            popout: null,
            activeStory: "quest",
            isFinished: false
        };
        this.modalBack = () => {
            this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
        };
        this.onStoryChange = this.onStoryChange.bind(this);
        connect.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#ffffffS"});
    }

    setActiveModal = (activeModal) => {
        activeModal = activeModal || null;
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

    findAchievement = (hash) => {
        var ach;

        let id = this.state.lastScanned;
        console.log(id);
        for (ach in AchievementsBasic) {
            if (AchievementsBasic[ach].hash === hash) {
                // if (AchievementsBasic[ach].id===id) {
                    localStorage.setItem("lastScanned", this.state.lastScanned+1);
                    this.setState({lastScanned: this.state.lastScanned+1});


                    switch (hash) {
                        case "byalex":
                            this.goQuest("nastya");
                            break;
                        case "qa":
                            this.goQuest("nastya2");
                            break;
                        case "dambo":
                            this.goQuest("dambo2");
                            break;
                        case "gamemode":
                            this.goQuest("lunch");
                            break;
                        case "superstar":
                            this.goQuest("pixel");
                            break;
                        case "pixel":
                            this.goQuest("virus");
                            break;
                        case "admins":
                            this.goQuest("hell");
                            break;
                        case "bdsm":
                            this.goQuest("hero");
                            break;
                        case "kazansky":
                            this.goQuest("kupol");
                            break;
                        case "complete":
                            this.goQuest("final");
                            break;



                    }
                    if (hash === "byalex") {
                        this.goQuest("nastya");
                    }


                    return AchievementsBasic[ach];
                // }
                if (AchievementsBasic[ach].id>id) {
                    return {
                        id: -1,
                        name: '',
                        title: 'СЛИШКОМ РАНО',
                        description: 'ПАДАЖЖИ',
                        img: 'https://vk.com/sticker/1-14085-256',
                        isHidden: false,
                        hash: 'notYet'
                    }
                }
                if (AchievementsBasic[ach].id<id) {
                    return {
                        id: 999999,
                        name: '',
                        title: 'Уже получил',
                        description: 'ХВАТИТ',
                        img: 'https://vk.com/sticker/1-14085-256',
                        isHidden: false,
                        hash: 'already'
                    }
                }

            }
        }
        for (ach in AchievementsDepartments) {
            if (AchievementsDepartments[ach].hash === hash) {
                return AchievementsDepartments[ach];
            }
        }
        for (ach in AchievementsEpic) {
            if (AchievementsEpic[ach].hash === hash) {
                return AchievementsEpic[ach];
            }
        }
        for (ach in AchievementsBrothers) {
            if (AchievementsBrothers[ach].hash === hash) {
                return AchievementsBrothers[ach];
            }
        }
        for (ach in AchievementsPlaces) {
            if (AchievementsPlaces[ach].hash === hash) {
                return AchievementsPlaces[ach];
            }
        }
    };

    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({fetchedUser: e.detail.data});
                    break;
                default:
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
        let hash = window.location.hash;
        while (hash.charAt(0) === '#') {
            hash = hash.substr(1);
        }

        let achievement = this.findAchievement(hash);
        if (achievement) {
            this.setActiveModal("someHash");
            this.setState({activeAchievement: achievement});
        }
    }

    goQuest = (activeQuestPanel) => {
        this.setState({activeQuestPanel: activeQuestPanel});
        localStorage.setItem("activeQuestPanel", activeQuestPanel);
    };

    unlock = (value1) => {
        this.setState({isFinished: value1})
    };

    onStoryChange(e) {
        connect.send("VKWebAppTapticImpactOccurred", {"style": "light"});
        this.setState({activeStory: e.currentTarget.dataset.story})
    }

    popoutChange = (popoutName) => {
        this.setState({popout: popoutName});
    };

    render() {
        const achievement = this.state.activeAchievement;
        const modal = (<ModalRoot activeModal={this.state.activeModal}>
            <ModalCard
                id={"someHash"}
                onClose={() => this.setActiveModal(null)}
            >
                <div align="center">
                    <h1 className="achievementCard">{achievement.title ? achievement.title : "Новое достижение!"}</h1>
                    <img className="achievementImg" width="80" height="80" src={achievement.img}/>
                    <div className="achievementSubtitle">{achievement.name}</div>
                    <div>{achievement.description}</div>
                    <br/>
                </div>
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
                    <Lunch
                        id="lunch"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Zozh
                        id="zozh"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Stars
                        id="stars"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Pixel
                        id="pixel"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Virus
                        id="virus"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Hell
                        id="hell"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Hero
                        id="hero"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Kupol
                        id="kupol"
                        isFinished={this.state.isFinished}
                        unlock={this.unlock}
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                    <Final
                        id="final"
                        go={this.goQuest}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />
                </View>
                <View id="achievements" popout={this.state.popout} activePanel={this.state.activeAchievementsPanel}>

                    <Achievements
                        isFinished={this.state.isFinished}
                        id="achievements"
                        go={this.go}
                        popoutChange={this.popoutChange}
                    />
                </View>
                <View id="top" popout={this.state.popout} activePanel={this.state.activeTopPanel}>

                    <Top
                        isFinished={this.state.isFinished}
                        id="top"
                        go={this.go}
                        popoutChange={this.popoutChange}
                    />
                </View>
            </Epic>
        );
    }
}

export default App;