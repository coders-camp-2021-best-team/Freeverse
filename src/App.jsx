import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components';
import { Header } from './components/organisms/Header/Header';
import { ProfilePage, EditProfilePage, ChatPage, FeedScreenPage, ErrorPage, HomePage } from './pages';

export const App = () => {
    const someID="lolo" //temporary 

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/site/*" element=
                    {<>
                        <Header id={someID}/>
                        <main>
                            <Routes>
                                <Route exact path="/feed-screen"  element={<ProtectedRoute><FeedScreenPage/></ProtectedRoute>} />
                                <Route exact path="/profile/:id"  element={<ProtectedRoute><ProfilePage id={someID}/></ProtectedRoute>} />
                                <Route exact path="/chat" element={<ProtectedRoute><ChatPage/></ProtectedRoute>} />
                                <Route exact path="/edit-profile" element={<ProtectedRoute><EditProfilePage/></ProtectedRoute>} />
                            </Routes>
                        </main>
                    </>
                    }
                />
                <Route exact path="*" element={<ErrorPage/>} />
            </Routes>
        </Router>
    );
};
