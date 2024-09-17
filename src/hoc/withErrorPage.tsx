import { ComponentType, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { defaultHero, characters } from "../utils/constants";
import { SWContext } from "../utils/context";
import ErrorPage from "../components/ErrorPage";

export const withErrorPage = <P extends Object>(Component: ComponentType<P & { heroId: string }>) => (props: Omit<P, 'heroId'>) => {
    const { heroId = defaultHero } = useParams();
    const { changeHero, setHasError } = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
            setHasError(false);
        }else {
            changeHero(defaultHero);
            setHasError(true);
        }

    }, [heroId])

    return characters[heroId] ? <Component heroId={heroId} {...(props as P)} /> : <ErrorPage />
}