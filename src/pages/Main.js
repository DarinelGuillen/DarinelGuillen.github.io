import Header from "../components/organisms/Header";
import Menu from "../components/organisms/AsideL";
import Center from "../components/organisms/Center";
import Aside from "../components/organisms/AsideR";
function Main() {
    return (
        <>
        <div className="w-screen h-auto bg-blue-600 flex-col ">

        <Header/>
        <div className="flex wrap h-screen gap-2 px-2">

        <Menu/>
        <Center/>
        <Aside/>
        </div>

        </div>
        </>
    );
}

export default Main;
