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

export const profileID = 'jP-2I-E7'; // TODO: This is temporary

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='*'>
                    <Navigate to='/not-found' />
                </Route>

                <Route exact path='/not-found'>
                    <ErrorPage />
                </Route>

                <Route exact path='/site/*'>
                    <BaseScreen>
                        <Routes>
                            <Route exact index>
                                <ProtectedRoute>
                                    <FeedScreenPage />
                                </ProtectedRoute>
                            </Route>

                            <Route exact path='/profile/:id'>
                                <ProtectedRoute>
                                    <ProfilePage id={profileID} />
                                </ProtectedRoute>
                            </Route>

                            <Route exact path='/chat'>
                                <ProtectedRoute>
                                    <ChatPage />
                                </ProtectedRoute>
                            </Route>

                            <Route exact path='/edit-profile'>
                                <ProtectedRoute>
                                    <EditProfilePage />
                                </ProtectedRoute>
                            </Route>

                            <Route path='*'>
                                <Navigate to='/not-found' />
                            </Route>
                        </Routes>
                    </BaseScreen>
                </Route>
            </Routes>
        </Router>
    );
};
