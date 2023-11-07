export async function getData(fetchParams) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/graphql`, fetchParams);
    const jsonData = await response.json();
    return jsonData;
}

export default async function handler(req, res) {
    const jsonData = await getData();
    res.status(200).json(jsonData);
}