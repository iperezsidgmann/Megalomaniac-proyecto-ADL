import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { FavoriteProvider } from "./context/FavoriteProvider";
import { SearchProvider } from "./context/SearchProvider";
import { PostProvider } from "./context/PostProvider";
import { AppContent } from "./AppContent";

export const App = () => {

    return (
        <AuthProvider>
            <PostProvider>
                <FavoriteProvider>
                    <SearchProvider>
                        <BrowserRouter>
                            <AppContent />
                        </BrowserRouter>
                    </SearchProvider>
                </FavoriteProvider>
            </PostProvider>
        </AuthProvider>
    );
};