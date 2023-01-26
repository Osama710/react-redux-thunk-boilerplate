import React, { useEffect, useState } from 'react'
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectUsers, selectUserSingle } from './redux/slice';
import { Row, Col } from "antd";
import { deleteUser, getUsers, getUserSingle, postUsers, updateUser } from './redux/thunk';
import reduxLogo from "../../assets/images/redux.png";
import reactLogo from "../../assets/images/react.png";

const Home = () => {

    const [show, setShow] = useState(null);
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState([]);

    const dispatch = useAppDispatch();
    const get_users = useAppSelector(selectUsers);
    const get_user_single = useAppSelector(selectUserSingle);

    useEffect(() => {
        setUsers(get_users)
    }, [get_users])

    useEffect(() => {
        setSingleUser(get_user_single)
    }, [get_user_single])

    const getData = async () => {
        await dispatch(getUsers());
        setShow('all_users')
    }

    const addUser = async () => {
        let value = {
            name: "Osama",
            userId: 11
        }
        await dispatch(postUsers(value));
        setShow('added')
    }

    const updateData = async () => {
        let value = {
            name: "Osama",
            id: 1
        }
        await dispatch(updateUser(1, value));
        setShow('updated')
    }

    const getDataSingle = async () => {
        await dispatch(getUserSingle(1))
        setShow('single_user')
    }

    const deleteData = async () => {
        await dispatch(deleteUser(1))
        setShow('deleted')
    }

    return (
        <div className="App">
            <div className="App-header">
                <h4>A Boilerplate for React Redux using Redux Thunk and JSONPlaceholder API.</h4>
            </div>
            <div className='body_data'>
                <div className='information'>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={4}>
                            <div className='flex logos'>
                                <div>
                                    <img src={reactLogo} className='App-logo' />
                                </div>
                                <div className='redux_logo hide'>
                                    <img src={reduxLogo} className='App-logo' />
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <div className='detail'>
                                <p className='body_text'><b>Redux Thunk:</b></p>
                                <p className='small_text'>Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action. </p>
                                <p className='body_text'><b>JSONPlaceholder API:</b></p>
                                <p className='small_text'>This API provides a set of fake online REST API for testing and prototyping.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <div className='redux_logo'>
                                <img src={reduxLogo} className='App-logo' />
                            </div>
                        </Col>
                    </Row>
                    {/* <div className='flex'>
                        <div>
                            <img src={reactLogo} className='App-logo' />
                        </div>
                        <div className='detail'>
                            <p className='body_text'><b>Redux Thunk:</b></p>
                            <p className='small_text'>Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action. </p>
                            <p className='body_text'><b>JSONPlaceholder API:</b></p>
                            <p className='small_text'>This API provides a set of fake online REST API for testing and prototyping.</p>
                        </div>
                        <div>
                            <img src={reduxLogo} className='App-logo' />
                        </div>
                    </div> */}
                    <div className='buttons'>
                        <Button onClick={getData} type='primary'>Get Users</Button>
                        <Button onClick={getDataSingle} type='primary'>Get User 1</Button>
                        <Button onClick={addUser} type='primary'>Add Users</Button>
                        <Button onClick={updateData} type='primary'>Update User 1</Button>
                        <Button onClick={deleteData} type='primary'>Delete User 1</Button>
                    </div>
                </div>
                <div className='users'>
                    {show === 'all_users' ?
                        Object.values(users)?.map((user, index) => (
                            <Row key={index}>
                                <Col xs={3} sm={3} md={1}>{index + 1}</Col>
                                <Col xs={16} sm={16} md={4}>
                                    <h4>{user?.name}</h4>
                                    <p>{user?.email}</p>
                                </Col>
                            </Row>
                        ))
                        :
                        show === "single_user" ?
                            <Row key={1}>
                                <Col xs={3} sm={3} md={1}>{1}</Col>
                                <Col xs={16} sm={16} md={4}>
                                    <h4>{singleUser?.name}</h4>
                                    <p>{singleUser?.email}</p>
                                </Col>
                            </Row>
                            :
                            show === "deleted" ?
                                <p>Record Deleted</p>
                                :
                                show === "added" ?
                                    <p>Record Added</p>
                                    :
                                    show === "updated" &&
                                    <p>Record Updated</p>
                    }
                </div>
                <section id="about-developer" className='about'>
                    <h2>About the Developer</h2>
                    <div class="developer-info">
                        <h3><b>Name:</b> <span className='normal_font'>Muhammad Osama</span></h3>
                        <h4><b>About:</b> <span className='normal_font'>I am a frontend developer having an experience of about an year. I have experience in working with HTML, CSS as well as ReactJS and NextJS to create responsive websites. Developing React based web apps included working with APIs for which I used Redux Thunk.</span></h4>
                        <h4>Experience:</h4>
                        <ul>
                            <li>Developed several responsive websites</li>
                            <li>Expertise in HTML, CSS, and JavaScript</li>
                            <li>Proficient in front-end frameworks such as Bootstrap</li>
                            <li>Experience with ReactJS and NextJS</li>
                            <li>Connected and worked with APIs using React Redux</li>
                            <li>API Integration experience using Redux Thunk</li>
                        </ul>
                        <h4><b>Role:</b> <span className='normal_font'>Frontend Web Developer</span></h4>
                        <h4>Contact:</h4>
                        <div className='flex contact_links'>
                            <p className='pt-2'><b>Email:</b> <a className='link' href="mailto:osamamymini@gmail.com"><b>osamamymini@gmail.com</b></a></p>
                            <p className='pt-2'><b>Github:</b> <a className='link' target="_blank" href="https://github.com/Osama710"><b>github.com/Osama710</b></a></p>
                            <p className='pt-2'><b>LinkedIn:</b> <a className='link' target="_blank" href="https://www.linkedin.com/in/osama-yousuf-6a1952177/"><b>linkedin.com/osama-yousuf</b></a></p>
                        </div>
                    </div>
                </section>
            </div>
            <footer className='footer'>
                <p>
                    Developed By Osama
                </p>
            </footer>
        </div>
    )
}

export default Home