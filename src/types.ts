export interface PageInfo {
    title: string,
    path: string,
    component: JSX.Element
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

export interface OfferTyping {
    path: string;
    type: string;
    longTitle: string;
    title: string;
    description: string;
    images: Array<{ src: string, alt: string }>;
    component?: JSX.Element;
    dayPlan?: Array<{ title: string, description: string }>;
}