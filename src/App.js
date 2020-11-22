import React from "react";
import "./main.scss"
// import './antd/css'
import {Layout, Menu} from 'antd'
import HeaderWrapper from "./Header";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const {Header, Content, Footer} = Layout
export default class App extends React.Component {
    render(){
        return (
            <div>
                <Layout>
                    <Header className="Header"><HeaderWrapper /></Header>

                    <Content className="Content">
                        <Router>
                            <Menu theme="dark" mode="horizontal">
                                <Menu.Item key="1"><Link to="/">Menu 1</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/about">Menu 2</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/users">Menu 3</Link></Menu.Item>
                            </Menu>
                            <Switch>
                                <Route path="/about">
                                    ABOUT page
                                </Route>
                                <Route path="/users">
                                    USERS page
                                </Route>
                                <Route path="/">
                                    Main page
                                </Route>
                            </Switch>
                        </Router>
                    </Content>
                    <Footer className="Footer">Footer</Footer>
                </Layout>
            </div>
        )
    }
}

