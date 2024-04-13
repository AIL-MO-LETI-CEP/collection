def preprocess: [.contentByPage | .[]] | flatten | .[];
def require_nonempty($key): has($key) and .[$key] and .[$key] != "";
def THIRTY_TWO_SPACES: "                                ";

[
    preprocess 
    | select(require_nonempty("ja") and require_nonempty("x-pmcp")) 
    | {"x-pmcp": .["x-pmcp"], ja: .ja} 
    | map_values(gsub("\\t"; "    ")) 
    | map_values(gsub("\\n"; THIRTY_TWO_SPACES))
]