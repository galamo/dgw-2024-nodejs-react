const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
type Props = {
    url: string
    width?: number
}
export default function MyImage({ url, width = 200 }: Props) {
    return <img src={url || defaultImage} width={width} />
}
