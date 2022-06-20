import React, {Suspense} from "react";
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import SlidingSection from './components/Other/SlidingSection'
import About from "./components/About/About";
import CallToActionBlock from './components/Other/CallToActionBlock'
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import { useTranslation } from "react-i18next";


function App() {

    const { t } = useTranslation();



    const Projects = React.lazy(() => import('./components/Projects/Projects'));
    return (
        <React.Fragment >
            <Header />
            <main >

                <Hero title={t("Hero.title")}  buttons={t("Hero.buttons", {returnObjects: true})}
                   elems={t("Services.elems", {returnObjects: true})} />
                <SlidingSection text={t("SlidingText" )}   />
                <About/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Projects/>
                </Suspense>
                <Services elems={t("Services.elems", {returnObjects: true})}/>
                <CallToActionBlock buttons={t("CallToAction.buttons", {returnObjects: true})}/>
            </main>
            <Footer elems={t("Services.elems", {returnObjects: true})}/>
        </React.Fragment>

    );
}

export default App;
