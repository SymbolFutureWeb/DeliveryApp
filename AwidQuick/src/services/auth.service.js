export async function authenticateUser(user) {
  const url = global.url + "/api/authenticate";
  // console.log(`from api compte ${JSON.stringify(user)}`);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    return undefined;
  }
}
