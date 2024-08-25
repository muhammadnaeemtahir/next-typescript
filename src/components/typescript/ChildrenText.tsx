type ChildrenTextProps = {
    children: string
}

const ChildrenText = ({ children }: ChildrenTextProps) => {
    return (
        <div>{children}</div>
    )
}

export default ChildrenText