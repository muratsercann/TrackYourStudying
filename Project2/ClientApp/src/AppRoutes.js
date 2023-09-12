import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Graphics } from "./components/Graphics";
import { Home } from "./components/Home";
import { SessionCardList } from "./components/session/SessionCardList";

const AppRoutes = [
    {
        index: true,
        element: <SessionCardList />/*Home*/
    },
    {
        path: '/sessions',
        element: <SessionCardList />
    },
    {
        path: '/graphics',
        element: <Graphics />
    }
];

export default AppRoutes;