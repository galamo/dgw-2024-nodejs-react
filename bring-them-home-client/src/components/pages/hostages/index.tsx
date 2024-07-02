import { useEffect, useState } from "react";
import MyHeader, { Colors } from "../../header";
import { SingleHostage, getHostagesApi } from "./service";
import { HostageCard } from "./hostageCard";
import { ProgressSpinner } from 'primereact/progressspinner';


export default function Hostages() {

    const [hostages, setHostages] = useState<SingleHostage[]>([])
    const [searchInput, setSearchInput] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getHostages() {
            try {
                setIsLoading(true)
                const result = await getHostagesApi(searchInput)
                setHostages(result)
            } catch (error) {
                alert("Something went wrong")
            } finally {
                setIsLoading(false)
            }
        }
        getHostages();
        return () => {
            console.log("hostages Component unmount")
        }
    }, [searchInput])

    return <div>
        <MyHeader text="Hostages" color={Colors.Yellow} />
        <input type="text" value={searchInput} onChange={(e) => {
            setSearchInput(e.target.value)
        }} />
        <SpinnerWrapper isLoading={isLoading}>
            <HostagesList hostages={hostages} />
        </SpinnerWrapper>

    </div>
}

function HostagesList(props: { hostages: SingleHostage[] }) {
    return (<div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {props.hostages.map((h, index) => <HostageCard key={h.name + h.age + index} {...h} />)}
    </div>)
}

function SpinnerWrapper(props: { isLoading: boolean, children: React.ReactElement }) {
    if (props.isLoading) return <div><ProgressSpinner /></div>
    else return props.children

}
