import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Charts } from "./components/Charts";
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
        element: <Charts />
    }
];

export default AppRoutes;