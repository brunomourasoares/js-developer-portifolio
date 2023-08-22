
async function fetchProfileData() {
    const url = '/js-developer-portifolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
