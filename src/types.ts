export interface SideInfo {
    titel: string,
    sti: string,
    komponent: JSX.Element
}
export interface BlogPost {
    id: number;
    title: string;
    author: string;
    date: string;
    summary: string;
    content: string;
    image: string;
}

export interface TilbudTyping {
    sti: string;
    langTitel: string;
    titel: string;
    beskrivelse: string;
    billeder: Array<{ src: string, alt: string }>;
    komponent?: JSX.Element;
    dagPlan?: Array<{ overskrift: string, beskrivelse: string }>;
}