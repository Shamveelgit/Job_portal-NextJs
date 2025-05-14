export default function removeSpecialCharacters(val : string) : string {
    return val.replace(/[^a-zA-Z0-9\s]/g,'').toLowerCase();
}