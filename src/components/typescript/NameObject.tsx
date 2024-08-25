type NameObjectProps = {
    name: {
        fname: string,
        lname: string,
    }
}

const NameObject = ({ name }: NameObjectProps) => {
    return (
        <>
            <h1>Names Object:</h1>
            <p>{name.fname} {name.lname}</p>
        </>
    )
}

export default NameObject