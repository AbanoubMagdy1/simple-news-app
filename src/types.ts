interface Article {
    author: string;
    title: string;
    description: string;
}

export interface News{
    articles: Article[];
}