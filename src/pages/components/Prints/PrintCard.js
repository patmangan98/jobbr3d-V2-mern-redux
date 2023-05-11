export default function PrintCard({print, index}) {
    return (
        <>
        <p>{print.description}</p>
        <p>{print.isDone}</p>
        <p>{print.weight}</p>
        <p>{print.hoursToPrint}</p>
        </>
    )
}