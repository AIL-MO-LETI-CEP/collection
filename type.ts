type Doc = {
    title: Title,
    source: Source,
    paged: true,
    contentByPage: { [key: string]: Page }
} | {
    title: Title,
    source: Source,
    paged: false,
    content: ReadonlyArray<Content>
};

type Title = { "ja"?: string, "x-faikleone"?: string };

type Source = {
    link: string,
    permanentLink?: string,
    date: string,
    draft?: string,
};

type Content = {
    "x-pmcp"?: string,
    "x-pmcp-linzklar"?: string,
    "x-lineparine"?: string,
    "ja"?: string,
    "x-flag-incorrect"?: {
        "detail": string
    },
    "x-translation-sidenote"?: {
        "detail": string
    },
    "x-flag-incorrect-style"?: {
        "detail": string
    }
};

type Page = ReadonlyArray<Content>;
