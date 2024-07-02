
type Props = {
    text: string,
    color?: Colors
}
export enum Colors {
    Red = "red",
    Yellow = "#686801"
}

export default function MyHeader(props: Props) {
    if (!props.text) return;
    return <h1 style={{ color: props.color || "pink" }} > {props.text} </h1>
}