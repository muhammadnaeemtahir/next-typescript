type NamesListProps = {
    names: {
        id: number,
        fname: string,
        lname: string
    }[]
}

const NamesList = ({ names }: NamesListProps) => {
    return (
        <>
            <h1>Names List:</h1>
            {
                names && names.map(name => (
                    <li key={name.id}>{name.fname} {name.lname}</li>
                ))
            }
        </>
    )
}

export default NamesList