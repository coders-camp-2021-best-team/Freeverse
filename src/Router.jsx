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

                <Route
                    element={
                        <BaseScreen>
                            <ProtectedRoute />
                        </BaseScreen>
                    }
                >
                    <Route
                        exact
                        path={routes.Feed}
                        element={<FeedScreenPage />}
                    />

                    <Route
                        exact
                        path={`${routes.Profile}/:id`}
                        element={<ProfilePage id={user?.uid || ''} />}
                    />

                    <Route exact path={routes.Chat} element={<ChatPage />} />

                    <Route
                        exact
                        path={routes.EditProfile}
                        element={<EditProfilePage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
