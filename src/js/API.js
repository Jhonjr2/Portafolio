




export async function getApi() {
    const url = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'

    try {
        const data = await fetch(url);
        const res = await data.json();
        localStorage.setItem('projects', JSON.stringify(res))
        return res;
    } catch (error) {
        console.log(error);
    }
}