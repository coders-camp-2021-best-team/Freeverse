import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import {
    BaseScreen,
    ChatPage,
    EditProfilePage,
    ErrorPage,
    FeedScreenPage,
    HomePage,
    ProfilePage
} from './pages';
import { ProtectedRoute } from './components';

import './styles/global.scss';
import 'typeface-roboto';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage />} />

                <Route exact path='*' element={<Navigate to='/not-found' />} />

                <Route exact path='/not-found' element={<ErrorPage />} />

                <Route
                    exact
                    path='/site/*'
                    element={
                        <BaseScreen>
                            <Routes>
                                <Route
                                    exact
                                    index
                                    element={
                                        <ProtectedRoute>
                                            <FeedScreenPage />
                                        </ProtectedRoute>
                                    }
                                />

                                <Route
                                    exact
                                    path='/profile/:id'
                                    element={
                                        <ProtectedRoute>
                                            <ProfilePage id={profileID} />
                                        </ProtectedRoute>
                                    }
                                />

                                <Route
                                    exact
                                    path='/chat'
                                    element={
                                        <ProtectedRoute>
                                            <ChatPage />
                                        </ProtectedRoute>
                                    }
                                />

                                <Route
                                    exact
                                    path='/edit-profile'
                                    element={
                                        <ProtectedRoute>
                                            <EditProfilePage />
                                        </ProtectedRoute>
                                    }
                                />

                                <Route
                                    path='*'
                                    element={
                                        <Navigate to='/not-found' replace />
                                    }
                                />
                            </Routes>
                        </BaseScreen>
                    }
                />
            </Routes>
        </Router>
    );
};
