import React from 'react';
import connect from '@vkontakte/vkui-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28More from '@vkontakte/icons/dist/28/more';
import '@vkontakte/vkui/dist/vkui.css';
import ModalRoot from "@vkontakte/vkui/dist/components/ModalRoot/ModalRoot";
import ModalCard from "@vkontakte/vkui/dist/components/ModalCard/ModalCard";
import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';

import BeginQuest from './panels/Quest/BeginQuest';
import Alexandrov from "./panels/Quest/Alexandrov";
const MODAL_CARD_MONEY_SEND = 'money-send';


class App extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("activePanel") === null) {
            localStorage.setItem("activePanel", "begin");
        }
        this.state = {
            activeModal: null,
            modalHistory: [],
            activePanel: localStorage.getItem("activePanel"),
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

    go = (activePanel) => {
        this.setState({activePanel: activePanel});
        localStorage.setItem("activePanel", activePanel);
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
                    ><Icon28More/></TabbarItem>
                </Tabbar>
            }>
                <View id="quest" popout={this.state.popout} activePanel={this.state.activePanel} modal={modal}>

                    <BeginQuest
                        id="begin"
                        go={this.go}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />

                    <Alexandrov
                        id="alexandrov"
                        go={this.go}
                        popoutChange={this.popoutChange}
                        modalChange={this.setActiveModal}
                    />

                </View>
            </Epic>
        );
    }
}

export default App;
