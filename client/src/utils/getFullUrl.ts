const getFullUrl = (url: string) => {
    console.log(`http://localhost:3000/${url}`);
    return `${process.env.REACT_APP_SERVER}/${url}`
}

export default getFullUrl;