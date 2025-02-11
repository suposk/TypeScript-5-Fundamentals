interface Movie {
    title: string,
    director: string,
    yearReleased: number,
    streaming: boolean,
    length?: number,

    //logReview?: (review: string | number) => void
    logReview?: ReviewLogger
}

interface ReviewLogger {
    (review: string): void;
}

interface Person {
    name: string,
    email: string,
}

interface Director extends Person {
    numberOfMoviesDirected: number,
}

interface ICastMember extends Person {
    role: string,
    rehearse:(sceneNumber: number) => void,
}

interface FavoriteItem {
    title: string,    
}

export { Movie, ReviewLogger as Logger, Person, Director, ICastMember, FavoriteItem };