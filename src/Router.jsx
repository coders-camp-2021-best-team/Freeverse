import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {
    BaseScreen,
    EditProfilePage,
    ChatPage,
    ErrorPage,
    FeedScreenPage,
    HomePage,
    LogoutPage,
    ProfilePage,
    ChatCreatorFormPage
} from './pages';
import { ProtectedRoute } from './components';
import { routes } from './routes/Routes';
import { PostDetailsPage } from './pages/PostDetails/PostDetails';
import { useUser } from './hooks';

export const Router = () => {
    const user = useUser();

    if (user.isLoading) return null;

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={routes.Home} element={<HomePage />} />

                <Route exact path={routes.NotFound} element={<ErrorPage />} />

                <Route
                    exact
                    path={routes.Error}
                    element={<Navigate to={routes.NotFound} replace />}
                />

                <Route
                    element={
                        <ProtectedRoute>
                            <BaseScreen />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        exact
                        path={routes.Logout}
                        element={<LogoutPage />}
                    />

                    <Route
                        exact
                        path={routes.Feed}
                        element={<FeedScreenPage />}
                    />

                    <Route
                        exact
                        path={`${routes.Post}/:id`}
                        element={<PostDetailsPage />}
                    />

                    <Route
                        exact
                        path={`${routes.Profile}/:id`}
                        element={<ProfilePage />}
                    />

                    <Route
                        exact
                        path={routes.ChatCreator}
                        element={<ChatCreatorFormPage />}
                    />

                    <Route
                        exact
                        path={`${routes.Chat}/:id`}
                        element={<ChatPage />}
                    />

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
