type ContainerProps = {
    styles: React.CSSProperties
}

const Container = ({ styles }: ContainerProps) => {
    return (
        <div style={styles}>
            It's a container which contains all of the  components
        </div>
    )
}

export default Container