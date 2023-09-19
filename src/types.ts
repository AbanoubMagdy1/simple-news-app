export interface Article {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
}

export interface News{
    articles: Article[];
}