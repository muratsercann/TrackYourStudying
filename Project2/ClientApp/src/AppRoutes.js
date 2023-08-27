import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Graphics } from "./components/Graphics";
import { Home } from "./components/Home";
import { SessionCardList } from "./components/session/SessionCardList";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/get-sessions',
        element: <SessionCardList />
    },
    {
        path: '/graphics',
        element: <Graphics />
    }
];

export default AppRoutes;