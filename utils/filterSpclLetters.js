export default function removeSpecialCharacters(val) {
    return val.replace(/[^a-zA-Z0-9\s]/g,'').toLowerCase();
}