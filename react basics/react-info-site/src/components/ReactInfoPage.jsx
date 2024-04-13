import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Main() {
    return (
        <>
            <h1>Reasons I&apos;m excited to learn React <span>😏</span></h1>
            <ol>
                <li>It&apos;s a cool library so in will be able to fit in with the cool frontend devs</li>
                <li>I&apos;m more likely to get a job as a developer if i know React</li>
            </ol>
        </>
    )
}

function ReactInfoPage() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default ReactInfoPage;