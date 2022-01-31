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
import { routes } from './routes/Routes';

export const profileID = 'jP-2I-E7'; // TODO: This is temporary

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path={routes.Home} element={<HomePage />} />

                <Route
                    exact
                    path='/*'
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
                                    path={`${routes.Profile}/:id`}
                                    element={
                                        <ProtectedRoute>
                                            <ProfilePage id={profileID} />
                                        </ProtectedRoute>
                                    }
                                />

                                <Route
                                    exact
                                    path={routes.Chat}
                                    element={
                                        <ProtectedRoute>
                                            <ChatPage />
                                        </ProtectedRoute>
                                    }
                                />

                                <Route
                                    exact
                                    path={routes.EditProfile}
                                    element={
                                        <ProtectedRoute>
                                            <EditProfilePage />
                                        </ProtectedRoute>
                                    }
                                />

                                <Route
                                    path={routes.Error}
                                    element={
                                        <Navigate
                                            to={routes.NotFound}
                                            replace
                                        />
                                    }
                                />
                            </Routes>
                        </BaseScreen>
                    }
                />
                <Route exact path={routes.NotFound} element={<ErrorPage />} />

                <Route
                    exact
                    path={routes.Error}
                    element={<Navigate to={routes.NotFound} />}
                />
            </Routes>
        </Router>
    );
};
