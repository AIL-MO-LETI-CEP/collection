type Doc = {
    title: { "ja"?: string, "x-faikleone"?: string },
    source: {
        link: string,
        permanentLink?: string,
        date: string,
        draft?: string,
    },
    paged: true,
    contentByPage: { [key: string]: Page }
};

type Page = ReadonlyArray<{
    "x-pmcp"?: string,
    "x-pmcp-linzklar"?: string,
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
}>;
