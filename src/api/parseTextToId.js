export default (text) => {
    return text.toLowerCase().replaceAll(' ','-').replaceAll('?','').replaceAll('!',''); 
}