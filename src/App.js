import React from 'react';
import connect from '@vkontakte/vkui-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28More from '@vkontakte/icons/dist/28/more';
import '@vkontakte/vkui/dist/vkui.css';

import BeginQuest from './panels/Quest/BeginQuest';

class App extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("activePanel") === null) {
            localStorage.setItem("activePanel", "quest");
        }
        this.state = {
            activePanel: localStorage.getItem("activePanel"),
            authToken: null,
            captchaImage: null,
            popout: null,
            activeStory: "quest"
        };
        this.onStoryChange = this.onStoryChange.bind(this);
        connect.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#ffffffS"});
    }

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
        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'quest'}
                        data-story="quest"
                        text="Квест"
                    ><Icon28More/></TabbarItem>
                    {/*<TabbarItem*/}
                    {/*    onClick={this.onStoryChange}*/}
                    {/*    selected={this.state.activeStory === 'top'}*/}
                    {/*    data-story="top"*/}
                    {/*    text="Топ"*/}
                    {/*><Icon28More/></TabbarItem>*/}
                    {/*<TabbarItem*/}
                    {/*    onClick={this.onStoryChange}*/}
                    {/*    selected={this.state.activeStory === 'achievement'}*/}
                    {/*    data-story="achievement"*/}
                    {/*    text="Достижения"*/}
                    {/*><Icon28More/></TabbarItem>*/}
                </Tabbar>
            }>
                <View id="quest" popout={this.state.popout} activePanel={this.state.activePanel}>

                    <BeginQuest
                        id="quest"
                        go={this.go}
                        popoutChange={this.popoutChange}
                    />

                    {/*<Captcha*/}
                    {/*    id="captcha"*/}
                    {/*    captchaImage={this.state.captchaImage}*/}
                    {/*    go={this.go}*/}
                    {/*    popoutChange={this.popoutChange}*/}
                    {/*/>*/}

                    {/*<Results*/}
                    {/*    id="results"*/}
                    {/*    go={this.go}*/}
                    {/*    popoutChange={this.popoutChange}*/}
                    {/*/>*/}
                </View>
                {/*<View popout={this.state.popout} id="top" activePanel="top">*/}
                {/*    <Top*/}
                {/*        id="top"*/}
                {/*        go={this.go}*/}
                {/*        popoutChange={this.popoutChange}*/}
                {/*    />*/}
                {/*</View>*/}
                {/*<View popout={this.state.popout} id="achievement" activePanel="achievement">*/}
                {/*    <Top*/}
                {/*        id="top"*/}
                {/*        go={this.go}*/}
                {/*        popoutChange={this.popoutChange}*/}
                {/*    />*/}
                {/*</View>*/}
            </Epic>
        );
    }
}

export default App;
