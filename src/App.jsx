import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { ProfilePage, EditProfilePage, ChatPage, FeedScreenPage, ErrorPage } from './pages';

export const App = () => {
    const someID="lolo" //temporary 

    return (
        <Router>
            <Header id={someID}/>
            <main>
                <Routes>
                    <Route path="/" exact element={<FeedScreenPage/>} />
                    <Route path="/profile/:id"  element={<ProfilePage id={someID}/>} />
                    <Route path="/chat" element={<ChatPage/>} />
                    <Route path="/edit-profile" element={<EditProfilePage/>} />
                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
            </main>
        </Router>
    );
};
