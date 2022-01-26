import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
import { useAuth } from './hooks';

export const Router = () => {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={routes.Home} element={<HomePage />} />

                <Route exact path={routes.NotFound} element={<ErrorPage />} />

                <Route
                    exact
                    path={routes.Error}
                    element={<Navigate to={routes.NotFound} />}
                />

                <Route exact path={routes.Home} element={<BaseScreen />}>
                    <Route
                        exact
                        path={routes.Feed}
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
                                <ProfilePage id={user?.uid || ''} />
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
