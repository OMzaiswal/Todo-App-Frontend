import { Signin } from "./Signin";
import ShowTodos from "./ShowTodos";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { usernameState } from "../store/selectors/username";
import { useRecoilValue } from "recoil";

export function StartPage() {

    const username = useRecoilValue(usernameState);

    return <div className="">
        {!username && <div>
            <Signin />
            </div>}
        {username && <div>
            <ShowTodos />
            </div>}
    </div>
}