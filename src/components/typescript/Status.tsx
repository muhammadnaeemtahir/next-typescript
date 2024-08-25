type StatusProps = {
    status: "loading" | "success" | "error"
}

const Status = ({ status }: StatusProps) => {

    let message: string = ""

    if (status === "loading") {
        message = "Loading..."
    } else if (status === "success") {
        message = "Success!"
    } else if (status === "error") {
        message = "Error occurred!"
    }

    return (
        <>
            <h1>Status: {message}</h1>
        </>
    )
}

export default Status