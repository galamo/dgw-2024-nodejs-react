import axios from "axios";
const url = "http://localhost:3000/hostages/all?apiKey=access-dgw-2024"
const searchUrl = `http://localhost:3000/hostages/search?apiKey=access-dgw-2024&hname=`

export type SingleHostage = {
    name: string,
    age: string,
    image: string
}

type HostageTypeNew = Awaited<ReturnType<typeof getHostagesApi>>

export async function getHostagesApi(searchInput: string): Promise<Array<SingleHostage>> {
    const result = await axios.get(searchInput ? searchUrl + searchInput : url)
    return result.data as Array<SingleHostage>;
}