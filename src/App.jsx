import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { HomePage, ProfilePage, EditProfilePage, ChatPage } from './pages';

export const App = () => {
    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/profile"  element={<ProfilePage/>} />
                    <Route path="/chat" element={<ChatPage/>} />
                    <Route path="/edit-profile" element={<EditProfilePage/>} />
                </Routes>
            </main>
        </Router>
    );
};
